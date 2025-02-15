'use client'
import Link from "next/link";

import { SchoolRatingShow } from "@/components/ratings";
import { useGetSchoolQuery } from "@/redux/services/public";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {

  const {data: school, isError, isLoading} = useGetSchoolQuery(id);
  if(isLoading){
    return <div>
      loading...
    </div>
  }
  if(isError){
    return <div>
      error!!!!
    </div>
  }


  
  return (
    <div className="flex flex-col bg-white text-black">
      <header
        className="bg-white h-auto p-6 sticky top-12 w-full z-10"
        style={{ boxShadow: "rgba(126, 126, 126, 0.25) 0px 4px 4px" }}
      >
        <div className="my-0 mx-auto max-w-[1280px] flex justify-between transition-all duration-300 ease-in-out">
          <div className="flex flex-col">
            <div>
              <span className="text-gray-500 flex text-base font-medium justify-start leading-5 mb-2 max-w-full">
                {" "}
                school location{" "}
              </span>
              <div className="flex items-center flex-row text-4xl leading-9 pb-0.5 text-left font-poppins font-black">
                <span>
                  {school?.location}
                </span>
                <div className="flex"></div>
              </div>
              <div className="flex flex-row ml-0 mt-[5px] ">
                <Link
                  href={`/search/professors/${id}?q=*`}
                  className="text-black font-bold"
                >
                  View all Professors
                </Link>
              </div>
            </div>
            <div className="flex">
              <Link
                href={`/add/school-rating/${id}`}
                className="bg-blue-600 border border-blue-700 rounded-full text-white flex  font-bold justify-center outline-none px-12 py-3 transition-transform duration-200 text-base leading-5 mt-4 max-w-xs no-underline"
              >
                Rate this school
              </Link>
              <Link
                href={`/compare/schools/${id}`}
                className="ml-2 bg-white border border-blue-700 rounded-full text-blue-700 flex font-bold justify-center outline-none px-12 py-3 transition-transform duration-200 text-base leading-5 mt-4 max-w-xs no-underline"
              >
                Compare this school
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="my-16 mx-auto max-w-[1280px] w-full min-h-[calc(100vh-240px)] overflow-hidden">
        <SchoolRatingShow />

        
      </div>
    </div>
  );
}
