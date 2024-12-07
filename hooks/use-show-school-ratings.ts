"use client";

import { useGetSchoolRatingsQuery, useGetAverageSchoolRatingsQuery } from "@/redux/services/public";
import { AverageSchoolRatingsType, SchoolRatingsType } from "@/types";
import {useEffect, useState } from "react";
import usePagination from "./pagination/usePagination";
import { NO_DATA_AVAILABLE, SCHOOL_RATINGS_API } from "@/constants";

// Helper function to calculate overall quality
const calculateOverallQuality = (ratings: AverageSchoolRatingsType): number => {
    const total =
      (ratings.safety || 0) +
      (ratings.oppputunites || 0) +
      (ratings.location || 0) +
      (ratings.facilities || 0) +
      (ratings.happiness || 0) +
      (ratings.reputation || 0) +
      (ratings.clubs || 0) +
      (ratings.internet || 0) +
      (ratings.social || 0) +
      (ratings.food || 0);
  
    // Calculate average across 10 rating fields
    return total / 10;
  };



export default function useShowSchoolRatings(id: string | number) {

  const [overallQuality, setOverallQuality] = useState<number | typeof NO_DATA_AVAILABLE>(NO_DATA_AVAILABLE);


  const { 
    totalCount,
    results: schoolRatings,
    isLoading,
    isError,
    lastSchoolElementRef 
  } = usePagination<SchoolRatingsType>({
    apiUrl:  `${SCHOOL_RATINGS_API}${id}/`,
    fetchFunction: useGetSchoolRatingsQuery,
  });

  const {data: averageRatings, isLoading: averageRatingsIsloading, isError: averageRatingError} = useGetAverageSchoolRatingsQuery(id);

  console.log("schoolRatings", schoolRatings)
  console.log("averageRatings", averageRatings)


  // Calculate the overall quality when average ratings change
  useEffect(() => {
    if (averageRatings) {
      const overall = calculateOverallQuality(averageRatings);
      setOverallQuality(overall);
    }
  }, [averageRatings]);

  return {
    averageRatings,
    overallQuality,
    schoolRatings,
    isLoading,
  };
}
