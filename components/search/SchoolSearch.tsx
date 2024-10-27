import { useSearchSchoolsQuery } from "@/redux/services/apiSlice";
import { School } from "@/types";
import SearchResults from "./SearchResults";
import { useCallback, useEffect, useState } from "react";
import SchoolRow from "./SchoolRow";
import NotFoundShoolMessage from "./NotFoundSchoolMessage";

export default function SchoolSearch({ query }: { query: string }) {

  const [page, setPage] = useState<number>(1); // State for current page
  const pageSize = 5; // Define how many results per page
  const [schools, setSchools] = useState<School[]>([]);

    // Use the search query with the current search term and page
  const { 
      data,
      error: schoolsError,
      isLoading: schoolsLoading, 
      isFetching
  } = useSearchSchoolsQuery({ q: query, page, pageSize }, { skip: query.length < 1 });

  const isLoadingMore = isFetching && page > 1;

  useEffect(() => {
    if (data) {
      if (page === 1) {
        setSchools(data.results);
      } else {
        setSchools((prevSchools) => [...prevSchools, ...data.results]);
      }
    }
  }, [data, page]);

  const handleNextPage = () => {
    if (data?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  console.log("query: ", query)

  console.log("data: ", data)

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      if (data?.next && !isFetching) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [data, isFetching]);

   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
    <SearchResults<School>
      query={query}
      data={{ results: schools, count: data?.count || 0, next: data?.next, previous: data?.previous }}
      isLoading={schoolsLoading}
      error={schoolsError}
      entityName="schools"
      noResultsMessage={<NotFoundShoolMessage query={query}/>}
      renderItem={(school: School) => (<SchoolRow school={school}/>)}
    />
    {data?.next && <button onClick={handleNextPage}>Next</button>}
    </>
  );
}
