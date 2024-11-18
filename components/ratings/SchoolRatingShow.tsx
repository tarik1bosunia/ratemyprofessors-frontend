"use client";

import useShowSchoolRatings from "@/hooks/use-show-school-ratings";
import AverageRatings from "./AverageRatings";
import RatingShow from "./RatingShow";

export default function SchoolRatingShow() {
  const {
    averageRatings,
    schoolRatings,
    overallQuality,
  } = useShowSchoolRatings(1); 
  // console.log("school ratings aveageRatings.tsx: ", schoolRatings);

  
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
