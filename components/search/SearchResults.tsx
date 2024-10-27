import React from "react";
import Link from "next/link";

type SearchResultsProps<T> = {
  query: string;
  context?: { data: T[]; count: number; };
  isLoading: boolean;
  error: any;
  entityName: string;
  noResultsMessage: React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
  lastSchoolElementRef: (node: HTMLDivElement) => void;
};

export default function SearchResults<T>({
  query,
  context,
  isLoading,
  error,
  entityName,
  noResultsMessage,
  renderItem,
  lastSchoolElementRef
}: SearchResultsProps<T>) {
  if (isLoading) return <div>Loading {entityName}...</div>;

  if (error) return <div>Error loading {entityName}</div>;

  if (context?.count === 0) {
    return noResultsMessage;
  }

  

  return (
    <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
      <div className="ml-10 mb-12 max-w-[860px]">
        <div className="">
          <div className="text-base text-left mb-4 mt-8 w-fit">
            <h1 className="mb-8 text-xl">
              <strong>{context?.count}</strong>
              &nbsp; {entityName} with &nbsp;
              <strong>{query}</strong>
              &nbsp; in their name
            </h1>
          </div>
        </div>
        <div>
          {
            
          context?.data.map((item: T, index) => {
            if(context?.data.length === index + 1) {
              return ( 
                <div key={(item as any).id} ref={lastSchoolElementRef}>
                <Link
  
                  href={`/school/${(item as any).id}`}
                
                  
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
  
                  href={`/school/${(item as any).id}`}
                
                  
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
