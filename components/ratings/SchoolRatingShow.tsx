"use client";

import useShowSchoolRatings from "@/hooks/use-show-school-ratings";
import AverageRatings from "./AverageRatings";
import RatingShow from "./RatingShow";
import { useParams } from "next/navigation";
import { NO_DATA_AVAILABLE } from "@/constants";

export default function SchoolRatingShow() {
  const { id: school_id } = useParams<{ id: string }>();


  const {
    averageRatings,
    schoolRatings,
    overallQuality,
  } = useShowSchoolRatings(school_id); 


  
  const {
    safety = NO_DATA_AVAILABLE,
    oppputunites=NO_DATA_AVAILABLE,
    location = NO_DATA_AVAILABLE,
    facilities =NO_DATA_AVAILABLE,
    happiness = NO_DATA_AVAILABLE,
    reputation = NO_DATA_AVAILABLE,
    clubs = NO_DATA_AVAILABLE,
    internet = NO_DATA_AVAILABLE,
    social = NO_DATA_AVAILABLE,
    food = NO_DATA_AVAILABLE,
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
