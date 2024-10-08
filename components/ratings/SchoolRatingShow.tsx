"use client";

import useShowSchoolRatings from "@/hooks/use-show-school-ratings";
import AverageRatings from "./AverageRatings";
import RatingShow from "./RatingShow";

export default function SchoolRatingShow() {
  const {
    safety,
    oppputunites,
    location,
    facility,
    happiness,
    reputation,
    clubs,
    internet,
    social,
    food,
    schoolRatings,
  } = useShowSchoolRatings();
  // console.log("school ratings aveageRatings.tsx: ", schoolRatings);

  return (
    <>
      <AverageRatings
        safety={safety}
        oppputunites={oppputunites}
        location={location}
        facility={facility}
        happiness={happiness}
        reputation={reputation}
        clubs={clubs}
        internet={internet}
        social={social}
        food={food}
      />
      <RatingShow ratings={schoolRatings} />
    </>
  );
}
