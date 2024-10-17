import { useSearchSchoolsQuery } from "@/redux/services/apiSlice";
import { School } from "@/types";
import SearchResults from "./SearchResults";
import { useState } from "react";

export default function SchoolSearch({ query }: { query: string }) {

  const [page, setPage] = useState<number>(1); // State for current page
  const pageSize = 5; // Define how many results per page

    // Use the search query with the current search term and page
  const { 
      data: schoolsData,
      error: schoolsError,
      isLoading: schoolsLoading, 
  } = useSearchSchoolsQuery({ q: query, page, pageSize }, { skip: query.length < 1 });

  return (
    <SearchResults<School>
      query={query}
      data={schoolsData}  // Ensure this matches the expected structure
      isLoading={schoolsLoading}
      error={schoolsError}
      entityName="schools"
      noResultsMessage={
        <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
          <div className="mt-16 max-w-[780px] min-h-screen text-left w-full">
            <div className="text-xl mb-8">
              No school with
              <strong className="font-bold"> {query}</strong>
              &nbsp;in its name.
            </div>
            <div className="text-base mb-10">
              Use the search bar above and check the spelling or try an alternate spelling.
            </div>
            <div className="flex flex-col items-center justify-between bg-gray-200 text-base p-7 w-full">
              <div className="text-base">
                Don&apos;t see the school you&apos;re looking for?
              </div>
              <a
                href="/add/school"
                className="bg-black border border-blue-700 rounded-full text-white flex justify-center items-center font-bold transition transform hover:scale-105 h-9 leading-5 mt-4 px-6"
              >
                Add a School
              </a>
            </div>
          </div>
        </div>
      }
      renderItem={(school: School) => (
        <>
          <div className="flex flex-col mr-10">
            <div className="text-xs font-semibold mb-1 uppercase">Quality</div>
            <div className="self-center bg-yellow-300 h-16 leading-9 mb-2 px-2.5 py-3.5 w-18 text-4xl font-extrabold">
              3.3
            </div>
            <div className="text-gray-700 leading-4 whitespace-nowrap">
              614 ratings
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-2xl my-5 mb-3.5 max-w-xl text-left w-full font-poppins font-extrabold">
              {school.name_of_school}
            </div>
            <div className="absolute text-right right-5 top-5">
              {school.location}
            </div>
          </div>
        </>
      )}

      
    />
  );
}
