'use client'
import { SchoolRatingsType } from "@/types";
import SchoolRating from "./SchoolRating";
import { usePagination } from "@/hooks/pagination";
import { SCHOOL_RATINGS_API } from "@/constants";
import { useGetSchoolRatingsQuery } from "@/redux/services/public";
import { useParams } from "next/navigation";
import Link from "next/link";

type RatingShowProps = {
    ratings: SchoolRatingsType[];
};
  

export default function RatingShow({ratings}: RatingShowProps) {
  const { id} = useParams<{ id: string }>();

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

  // console.log("schoolRatings", schoolRatings)

  return (
    <div className="md:max-w-[calc(926px)] my-8">
      <div className="text-xl font-bold text-left">104 Ratings</div>
      <ul className="list-none">

    
        {ratings.map((rating, index) => {
          if(ratings.length == index + 1){
            return(
              <div key={rating.id} ref={lastSchoolElementRef}>
              
              <SchoolRating
              
                key={rating.id}
                id={rating.id}
                safety={rating.safety}
                oppputunites={rating.oppputunites}
                location={rating.location}
                facilities={rating.facilities}
                happiness={rating.happiness}
                reputation={rating.reputation}
                clubs={rating.clubs}
                internet={rating.internet}
                social={rating.social}
                food={rating.food}
                comment={rating.comment}
                created_at={rating.created_at}
                user={rating.user}
              />
              </div>
            )
          }else{
            return (
              <div key={rating.id}>
              <SchoolRating
                key={rating.id}
                id={rating.id}
                safety={rating.safety}
                oppputunites={rating.oppputunites}
                location={rating.location}
                facilities={rating.facilities}
                happiness={rating.happiness}
                reputation={rating.reputation}
                clubs={rating.clubs}
                internet={rating.internet}
                social={rating.social}
                food={rating.food}
                comment={rating.comment}
                created_at={rating.created_at}
                user={rating.user}
              />
              </div>
            )
          }
        })}
      </ul>
    </div>
  );
}
