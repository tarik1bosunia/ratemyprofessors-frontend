'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollProps<T> {
  fetchData: (page: number) => Promise<{ results: T[] }>; // Generic fetch function to get paginated data
  pageSize: number; // Page size to request in the API
}

export default function useInfiniteScroll <T,>({ fetchData, pageSize }: UseInfiniteScrollProps<T>){
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<T[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true); // To handle cases where there are no more items
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const loadItems = async () => {
    if (isFetching || !hasMore) return;

    setIsFetching(true);
    const data = await fetchData(page);

    if (data.results.length < pageSize) {
      setHasMore(false); // No more pages to fetch
    }

    setItems((prevItems) => [...prevItems, ...data.results]);
    setIsFetching(false);
  };

  // Fetch data when page changes
  useEffect(() => {
    loadItems();
  }, [page]);

  // Observer callback for infinite scrolling
  const observeLastItem = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching || !node) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !isFetching && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        { rootMargin: '100px' }
      );

      if (node) observer.observe(node);

      return () => {
        if (node) observer.disconnect();
      };
    },
    [isFetching, hasMore]
  );

  useEffect(() => {
    if (lastItemRef.current) {
      observeLastItem(lastItemRef.current);
    }
  }, [items, observeLastItem]);

  return {
    items,
    isFetching,
    lastItemRef,
    hasMore,
  };
};
