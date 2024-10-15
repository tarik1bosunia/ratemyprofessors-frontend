"use client";

import { useGetSchoolRatingsQuery } from "@/redux/services/apiSlice";
import { SchoolRatingsType } from "@/types";
import { useEffect, useState } from "react";

// Helper function to calculate overall quality
const calculateOverallQuality = (ratings: SchoolRatingsType): number => {
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

// Helper function to calculate average ratings from the data
const calculateAverageRating = (schoolRatings: SchoolRatingsType[]): SchoolRatingsType => {
  if (!schoolRatings.length) {
    return {
      id: 0,
      safety: 0,
      oppputunites: 0,
      location: 0,
      facilities: 0,
      happiness: 0,
      reputation: 0,
      clubs: 0,
      internet: 0,
      social: 0,
      food: 0,
      comment: '',
      created_at: '',
      user: 0,
    };
  }

  // For simplicity, return the first rating (this can be expanded to compute averages of multiple ratings)
  return schoolRatings[0];
};

export default function useShowSchoolRatings(id: number) {
  const [averageRatings, setAverageRatings] = useState<SchoolRatingsType>({
    id: 0,
    safety: 0,
    oppputunites: 0,
    location: 0,
    facilities: 0,
    happiness: 0,
    reputation: 0,
    clubs: 0,
    internet: 0,
    social: 0,
    food: 0,
    comment: '',
    created_at: '',
    user: 0,
  });

  const [overallQuality, setOverallQuality] = useState(0);

  // Fetch school ratings using RTK Query
  const { data: schoolRatings = [], isLoading: schoolRatingsIsLoading } = useGetSchoolRatingsQuery(id);

  // Update average ratings when data is loaded
  useEffect(() => {
    if (schoolRatings.length > 0) {
      const average = calculateAverageRating(schoolRatings);
      setAverageRatings(average);
    }
  }, [schoolRatings]);

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
    isLoading: schoolRatingsIsLoading,
  };
}
