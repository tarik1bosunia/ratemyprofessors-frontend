import { useSearchProfessorsQuery } from "@/redux/services/apiSlice";
import { Professor} from "@/types";
import SearchResults from "./SearchResults";
import NotFoundShoolMessage from "./NotFoundSchoolMessage";
import { usePagination } from "@/hooks/pagination";
import { PROFESSOR_SEARCH_API } from "@/constants";
import ProfessorRow from "./ProfessorRow";

export default function ProfessorSearch({ query }: { query: string }) {

  const { 
    totalCount,
    results: professors,
    isLoading,
    isError,
    lastSchoolElementRef 
  } = usePagination<Professor>({
    apiUrl: PROFESSOR_SEARCH_API,
    query: query,
    fetchFunction: useSearchProfessorsQuery,
  });
  
  // console.log(professors);


  return (

    <SearchResults<Professor>
      query={query}
      data={professors}
      totalCount={totalCount}
      isLoading={isLoading}
      error={isError}
      entityName="professor"
      noResultsMessage={<NotFoundShoolMessage query={query}/>}
      renderItem={(professor: Professor) => (<ProfessorRow professor={professor}/>)}
      lastSchoolElementRef = {lastSchoolElementRef}
    />
  );
}


