import { SchoolRatingsType } from "@/types";
import SchoolRating from "./SchoolRating";

type RatingShowProps = {
    ratings: SchoolRatingsType[];
};
  

export default function RatingShow({ratings}: RatingShowProps) {
  return (
    <div className="md:max-w-[calc(926px)]">
      <div className="text-xl font-bold text-left">104 Ratings</div>
      <ul className="list-none">
        {ratings.map((rating) => (
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
        ))}
      </ul>
    </div>
  );
}
