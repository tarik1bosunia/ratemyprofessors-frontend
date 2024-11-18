import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { translateEntityName, translateNumberToBangla } from "@/utils";

type SearchResultsProps<T> = {
  query: string;
  context?: { data: T[]; count: number; };
  data: T[],
  totalCount: number, 
  isLoading: boolean;
  error: any;
  entityName: string;
  noResultsMessage: React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
  lastSchoolElementRef: (node: HTMLDivElement) => void;
};

export default function SearchResults<T>({
  query,
  data,
  totalCount,
  isLoading,
  error,
  entityName,
  noResultsMessage,
  renderItem,
  lastSchoolElementRef
}: SearchResultsProps<T>) {

  const t  = useTranslations("SEARCH")
  const locale = useLocale();

  if (isLoading) return <div>Loading {entityName}...</div>;

  if (error) return <div>Error loading {entityName}</div>;

  if (totalCount === 0) {
    return noResultsMessage;
  }

  // console.log(data)
    // Convert the number to Bengali if the current locale is 'bn'
    const displayedCount = locale === 'bn' ? translateNumberToBangla(totalCount) : totalCount.toString();
    const translatedEntityName = translateEntityName(entityName, locale);
    console.log("entityName: ", entityName)

  return (
    <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
      <div className="ml-10 mb-12 max-w-[860px]">
        <div className="">
          <div className="text-base text-left mb-4 mt-8 w-fit">
            <h1 className="mb-8 text-xl">
              {/* <strong>{totalCount}</strong>
              &nbsp; {entityName}  */}

             {
              query && (
                <>
                    {
                    t.rich(
                      'WithQueryInName',
                      { 
                        totalCount: displayedCount,
                        entityName: translatedEntityName,
                        query,
                        strong: (query) => (<strong className="font-bold">{query}</strong>)
                      })}
                </>
              )
             } 
             
            </h1>
          </div>
        </div>
        <div>
          {
            
          data.map((item: T, index) => {
            if(data.length === index + 1) {
              return ( 
                <div key={(item as any).id} ref={lastSchoolElementRef}>
                <Link
  
                  href={`/${entityName}/${(item as any).id}`}
                
                  
                  className="mb-6 flex items-center bg-gray-200 px-6 py-3 relative no-underline w-full"
                >
                  {renderItem(item)}
                </Link>
                </div>
              )
            }else{
              return ( 
                <div key={(item as any).id}>
                <Link
  
                  href={`/${entityName}/${(item as any).id}`}
                
                  
                  className="mb-6 flex items-center bg-gray-200 px-6 py-3 relative no-underline w-full"
                >
                  {renderItem(item)}
                </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}
