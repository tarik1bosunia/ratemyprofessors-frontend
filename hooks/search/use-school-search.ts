import { useSearchSchoolsQuery } from "@/redux/services/public";
import { School } from "@/types";
import { useEffect, useState } from "react";

// Define a type for the search parameters
type Props = { 
  apiUrl?: string,
  query: string,
  pageNumber: number;
  pageSize?: number;
};   



export default function useSearchSchool({apiUrl, query, pageNumber, pageSize=10}: Props) {
//   const { data, error, isLoading } = useSearchSchoolsQuery({ q: query, page: pageNumber, pageSize });

  const baseUrl = `${apiUrl}?page=${pageNumber}&page_size=${pageSize}&q=${query}`    
  const { data, isLoading, isError, isFetching } = useSearchSchoolsQuery({ url: baseUrl, });

  // const schools = data?.results || []; // Safely access data.results or default to an empty array
  const [hasMore, setHasMore] = useState(false);

  const [schools, setSchools] = useState<School[]>([])
 
  useEffect(() => {
    setSchools([])
  }, [query])
  

  useEffect(() => {
    if (data?.results) {
      setSchools((prevSchools) => Array.from(new Set([...prevSchools, ...data.results])))
      setHasMore(!!data.next); // if data.next is not null, set hasMore to true
    }
  
  }, [data?.results, data?.next]);
  
  return {
    loading: isLoading,
    error: isError,
    schools,
    hasMore,
    isFetching
  };
}
