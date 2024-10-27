import { useEffect, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';


// Define generic type for the data being searched
type UsePaginationProps<T> = {
  apiUrl: string,
  query?: string;
  pageNumber?: number;
  pageSize?: number;
  fetchFunction: (arg: any) => any;
};

interface UsePaginationReturn<T> {
  results: T[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;

  // pagination
  pageNumber: number,
  incrementPage: () => void,
  resetPage: () => void,
  hasMore: boolean;

  // infinite scroll
  lastSchoolElementRef: (node: HTMLDivElement) => void
}

export default function usePagination<T>({apiUrl, query = "", pageSize = 10, fetchFunction }: UsePaginationProps<T>) : UsePaginationReturn<T>{
  
  // pagination
  const initialPage = 1
  const [pageNumber, setPageNumber] = useState(initialPage);
  const incrementPage = () => setPageNumber((prevPage) => prevPage + 1);
  const resetPage = () => setPageNumber(initialPage);
  const [hasMore, setHasMore] = useState(false);
  
  // data featching
  const { data, isLoading, isError, isFetching } = fetchFunction({url: `${apiUrl}?page=${pageNumber}&page_size=${pageSize}&q=${query}`});
  const [results, setResults] = useState<T[]>([]);
  

  // Clear results when query changes
  useEffect(() => {
    setResults([]);
  }, [query]);

  // Append new results as they come in
  useEffect(() => {
    if (data?.results) {
      setResults((prevResults) => Array.from(new Set([...prevResults, ...data.results])));
      setHasMore(!!data.next);
    }
  }, [data?.results, data?.next]);

  // use infinite scrool 
  const lastSchoolElementRef = useInfiniteScroll({
    loading: isLoading,
    isFetching,
    hasMore,
    onIntersect: () => incrementPage(),
  });

  return {
    results,
    isLoading,
    isError,
    hasMore,
    isFetching,

    // pagination
    pageNumber,
    incrementPage,
    resetPage,

    // infinite scroll
    lastSchoolElementRef,
  };
}
