'use client'
import { SCHOOL_SEARCH_API } from '@/constants';
import React, { useState } from 'react';
import usePagination from '@/hooks/pagination/usePagination';
import { useSearchSchoolsQuery } from '@/redux/services/apiSlice';
import { School } from '@/types';

export default function SchoolSearchPage() {
  const [query, setQuery] = useState('');
 
  const { 
    results: schools,
    isLoading,
    isError,
    lastSchoolElementRef 
  } = usePagination<School>({
    apiUrl: SCHOOL_SEARCH_API,
    query: query,
    fetchFunction: useSearchSchoolsQuery,
  });
  
  console.log(schools);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search schools" />
      {schools.map((school, index) => {
        if (schools.length === index + 1) {
          return (
            <div ref={lastSchoolElementRef} key={school.id}>
              {school.name_of_school}
            </div>
          );
        } else {
          return <div key={school.id}>{school.name_of_school}</div>;
        }
      })}
      <div>{isLoading && 'Loading...'}</div>
      <div>{isError && 'Error occurred while fetching schools'}</div>
    </>
  );
}

