'use client'

import { PROFESSOR_RATINGS_API } from "@/constants";
import { usePagination } from "@/hooks/pagination";
import { useGetCourseCodesByProfessorQuery, useProfessorRatingsQuery } from "@/redux/services/public";
import { ProssorRatingType } from "@/types";
import { useState } from "react";

import RatingsItem from "@/components/ratings/professor/RatingsItem";
import { useParams } from "next/navigation";


export default function TeacherRatingsTabs() {


  const [query, setQuery] = useState<string>("");
  const { id } = useParams<{ id: string }>();

  const {
    totalCount,
    results: ratings,
    isLoading,
    isError,
    lastSchoolElementRef,
  } = usePagination<ProssorRatingType>({
    apiUrl: `${PROFESSOR_RATINGS_API}${id}/ratings`,
    query: query,
    fetchFunction: useProfessorRatingsQuery,
  });

  const { data: courseCodes, isLoading: courseCodeIsLoading, isError: courseCodeIsError } = useGetCourseCodesByProfessorQuery(id);



  if (isLoading && courseCodeIsLoading) {
    return <div>Loading professor ratings....</div>;
  }

  if (isError && courseCodeIsError) {
    return <div>error on featching professor ratings!!!</div>;
  }


  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setQuery(selectedValue);
    // console.log(`Query changed to: ${selectedValue}`);
  };

  return (
    <div className="xl:max-w-[calc(926px)]">
      <ul className="border-b-2 border-[#f1f1f1] flex mt-[28px] mx-[22px] list-none">
        <li className="border-b-2 border-[#151515] text-[#151515] cursor-pointer font-bold leading-[1.8] min-w-[150px] pb-[8px]">
          {totalCount} Student Ratings
        </li>
      </ul>
      <div className="my-0 mx-6">
        <select name="" id="" onChange={handleChange} value={query}>
          <option value=""> all courses </option>
          {courseCodes?.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>

      <ul className="list-none " id="ratingsList">
        {ratings.map((rating, index) => {
          if (ratings.length === index + 1) {
            return <div key={index} ref={lastSchoolElementRef}>
                <RatingsItem rating={rating} />
            </div>;
          } else {
            return <div key={index}>
                <RatingsItem rating={rating} />
            </div>;
          }
        })}
      </ul>
    </div>
  );
}
