"use client";
import SafetyIcon from "@/public/icons/ratings/safety_icon.svg";
import OppurtunitiesIcon from "@/public/icons/ratings/oppurtunities.svg";
import LocationIcon from "@/public/icons/ratings/location_icon.svg";
import FacilitiesIcon from "@/public/icons/ratings/facilities_icon.svg";
import HappinessIcon from "@/public/icons/ratings/happiness_icon.svg";
import ReputationIcon from "@/public/icons/ratings/reputation_icon.svg";
import ClubsIcon from "@/public/icons/ratings/clubs_icon.svg";
import InternetIcon from "@/public/icons/ratings/internet_icon.svg";
import SocialIcon from "@/public/icons/ratings/social_icon.svg";
import FoodIcon from "@/public/icons/ratings/food_icon.svg";
import AverageRating from "./AverageRating";

type RatingType = {
  icon: string;
  title: string;
  rating: number | string;
};
type AverageRatingsProps = {
  safety: number | string;
  oppputunites: number | string;
  location: number | string;
  facilities: number | string;
  happiness: number | string;
  reputation: number | string;
  clubs: number | string;
  internet: number | string;
  social: number | string;
  food: number | string;
  overallQuality: number | string;
};

export default function AverageRatings({
  safety,
  oppputunites,
  location,
  facilities,
  happiness,
  reputation,
  clubs,
  internet,
  social,
  food,
  overallQuality,
}: AverageRatingsProps) {
  const ratings: RatingType[] = [
    {
      icon: SafetyIcon,
      title: "Safety",
      rating: safety,
    },
    {
      icon: OppurtunitiesIcon,
      title: "Oppputunites",
      rating: oppputunites,
    },
    {
      icon: LocationIcon,
      title: "location",
      rating: location,
    },
    {
      icon: FacilitiesIcon,
      title: "Facilites",
      rating: facilities,
    },
    {
      icon: HappinessIcon,
      title: "Happiness",
      rating: happiness,
    },
    {
      icon: ReputationIcon,
      title: "Reputation",
      rating: reputation,
    },
    {
      icon: ClubsIcon,
      title: "Clubs",
      rating: clubs,
    },
    {
      icon: InternetIcon,
      title: "Internet",
      rating: internet,
    },
    {
      icon: SocialIcon,
      title: "Social",
      rating: social,
    },
    {
      icon: FoodIcon,
      title: "Food",
      rating: food,
    },
  ];

  return (
    <div className="flex items-center justify-between flex-col md:flex-row md:max-w-[calc(926px)]">
      <div className="mb-6 md:mb-0 md:pl-6">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col">
            <div className="text-[80px] leading-[80px] mb-[2px] font-poppins font-black">
              {Number(overallQuality).toFixed(1)}
            </div>
            <div className="text-[#7e7e7e] text-sm font-medium leading-[17px]">
              Overall Quality
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ columnGap: "110px" }}
        className="flex flex-col  flex-wrap gap-y-4 md:gap-y-0 h-full md:h-[264px] justify-between items-center w-[628px]"
      >
        {ratings.map((rating, index) => (
          <AverageRating
            key={index}
            icon={rating.icon}
            title={rating.title}
            rating={rating.rating}
          />
        ))}
      </div>
    </div>
  );
}
