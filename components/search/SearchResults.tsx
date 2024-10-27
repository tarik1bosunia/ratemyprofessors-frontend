import React from "react";
import { School } from "@/types";
import Link from "next/link";

type SearchResultsProps<T> = {
  query: string;
  data?: { results: T[]; count: number; next: string | null | undefined; previous: string | null | undefined };
  isLoading: boolean;
  error: any;
  entityName: string;
  noResultsMessage: React.ReactNode;
  renderItem: (item: T) => React.ReactNode;
};

export default function SearchResults<T>({
  query,
  data,
  isLoading,
  error,
  entityName,
  noResultsMessage,
  renderItem,
}: SearchResultsProps<T>) {
  if (isLoading) return <div>Loading {entityName}...</div>;

  if (error) return <div>Error loading {entityName}</div>;

  if (!data || data.results.length === 0) {
    return noResultsMessage;
  }

  

  return (
    <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
      <div className="ml-10 mb-12 max-w-[860px]">
        <div className="">
          <div className="text-base text-left mb-4 mt-8 w-fit">
            <h1 className="mb-8 text-xl">
              <strong>{data.count}</strong>
              &nbsp; {entityName} with &nbsp;
              <strong>{query}</strong>
              &nbsp; in their name
            </h1>
          </div>
        </div>
        <div>
          {
            
          data.results.map((item: T) => (
            <Link
              href={`/school/${(item as any).id}`}
             
              key={(item as any).id}
              className="mb-6 flex items-center bg-gray-200 px-6 py-3 relative no-underline w-full"
            >
              {renderItem(item)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
