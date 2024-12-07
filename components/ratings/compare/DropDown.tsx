import { PROFESSOR_SEARCH_API } from "@/constants";
import { usePagination } from "@/hooks/pagination";
import { useSearchProfessorsQuery } from "@/redux/services/public";
import { Professor } from "@/types";
import Link from "next/link";
import { CiApple } from "react-icons/ci";

interface Props {
  query: string;
  setShowDropdown: (value: boolean) => void; // Close dropdown after link click
  id?: string;
}

export default function Dropdown({ query, setShowDropdown, id }: Props) {
const {
  totalCount,
  results: professors,
  isLoading,
  isError,
  lastSchoolElementRef,
} = usePagination<Professor>({
  apiUrl: PROFESSOR_SEARCH_API,
  query: query,
  fetchFunction: useSearchProfessorsQuery,
});

  if (query === "") return null; // Return null instead of empty fragment
  if (isLoading) return <div>Loading Professor Data...</div>;
  if (isError) return <div>Error loading Professor Data!</div>;

  if (professors?.length === 0) {
    return <div>No professor found</div>;
  }
  
  let redirect_base_link = `/compare/professors/`
  if(id){
    redirect_base_link = redirect_base_link + `${id}`
  }
 

  return (
    <div
      className="p-4 bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto"
      onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the dropdown
    >
      {professors.map((professor: Professor, index) => {
        if(professors.length == index + 1) return (
        <div key={professor.id} ref={lastSchoolElementRef}>
        <Link
          
          href={`${redirect_base_link}/${professor.id}`}
          className="flex items-center gap-3 p-2 hover:bg-gray-200 transition-colors duration-150"
          onClick={() => setShowDropdown(false)} // Close dropdown after selection
        >
          <CiApple />
          <div className="flex flex-col">
            <div>{`${professor.first_name} ${professor.last_name}`}</div>
            <div>{`${professor.department} ${professor.name_of_school}`}</div>
          </div>
        </Link>
        </div>
        )
        else return (<Link
          key={professor.id}
          href={`${redirect_base_link}/${professor.id}`}
          className="flex items-center gap-3 p-2 hover:bg-gray-200 transition-colors duration-150"
          onClick={() => setShowDropdown(false)} // Close dropdown after selection
        >
          <CiApple />
          <div className="flex flex-col">
            <div>{`${professor.first_name} ${professor.last_name}`}</div>
            <div>{`${professor.department} ${professor.name_of_school}`}</div>
          </div>
        </Link>)
})}
    </div>
  );
}
