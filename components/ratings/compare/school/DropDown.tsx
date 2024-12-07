import { SCHOOL_SEARCH_API } from "@/constants";
import { usePagination } from "@/hooks/pagination";
import {useSearchSchoolsQuery } from "@/redux/services/public";
import { School } from "@/types";
import Link from "next/link";

interface Props {
  query: string;
  setShowDropdown: (value: boolean) => void; // Close dropdown after link click
  id?: string;
}

export default function Dropdown({ query, setShowDropdown, id }: Props) {
 
  const { 
    results: schools,
    isLoading,
    isError,
    // TODO
    lastSchoolElementRef 
  } = usePagination<School>({
    apiUrl: SCHOOL_SEARCH_API,
    query: query,
    fetchFunction: useSearchSchoolsQuery,
  });

  if (query === "") return null; // Return null instead of empty fragment
  if (isLoading) return <div>Loading school Data...</div>;
  if (isError) return <div>Error loading school Data!</div>;

  if (schools?.length === 0) {
    return <div>No school found</div>;
  }
  
  let redirect_base_link = `/compare/schools/`
  if(id){
    redirect_base_link = redirect_base_link + `${id}`
  }
 

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto"
      onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the dropdown
    >
      {schools.map((school: School) => (
        <Link
          key={school.id}
          href={`${redirect_base_link}/${school.id}`}
          className="flex items-center gap-3 p-2 hover:bg-gray-200 transition-colors duration-150"
          onClick={() => setShowDropdown(false)} // Close dropdown after selection
        >
          <div className="flex flex-col">
   
            <div>{` ${school.name_of_school}`}</div>
            <div>{` ${school.location}`}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
