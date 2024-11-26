"use client";

import useShowSchoolRatings from "@/hooks/use-show-school-ratings";
import AverageRatings from "./AverageRatings";
import RatingShow from "./RatingShow";
import { useParams } from "next/navigation";

export default function SchoolRatingShow() {
  const { id: school_id } = useParams<{ id: string }>();


  const {
    averageRatings,
    schoolRatings,
    overallQuality,
  } = useShowSchoolRatings(school_id); 


  
  const {
    safety = "N/A",
    oppputunites="N/A",
    location = "N/A",
    facilities ="N/A",
    happiness = "N/A",
    reputation = "N/A",
    clubs = "N/A",
    internet = "N/A",
    social = "N/A",
    food = "N/A",
  } = averageRatings || {};

  return (
    <>
      <AverageRatings
        safety={safety}
        oppputunites={oppputunites}
        location={location}
        facilities={facilities}
        happiness={happiness}
        reputation={reputation}
        clubs={clubs}
        internet={internet}
        social={social}
        food={food}
        overallQuality={overallQuality}
      />
      <RatingShow ratings={schoolRatings} />
    </>
  );
}
