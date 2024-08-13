'use client'
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
import  useShowSchoolRatings  from "@/hooks/use-show-school-ratings";
import SchoolRating from "./SchoolRating";

type RatingType = {
  icon: string;
  title: string;
  rating: number;
};

export default function AverageRatings() {

 
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
    schoolRatings
  } = useShowSchoolRatings();
  console.log('school ratings aveageRatings.tsx: ', schoolRatings)

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
      title: "Facility",
      rating: facility,
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
    <>
      <div className="flex items-center justify-between mt-[6px] md:max-w-[calc(926px)]">
        <div className="pl-6">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col">
              <div className="text-[80px] leading-[80px] mb-[2px] font-poppins font-black">
                3.4
              </div>
              <div className="text-[#7e7e7e] text-sm font-medium leading-[17px]">
                Overall Quality
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 mr-6 flex-col flex-nowrap">
          <div style={{columnGap: '110px'}} className=" flex flex-col flex-wrap h-[264px] justify-between w-[628px]">
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
      </div>
      
    <div className="md:max-w-[calc(926px)]">
      <div className="text-xl font-bold text-left">104 Ratings</div>
      <ul className="list-none">
        {
          schoolRatings.map((rating) => (
            <SchoolRating key={rating.id} id={rating.id} safety={rating.safety} oppputunites={rating.oppputunites} location={rating.location} facility={rating.facility} happiness={rating.happiness} reputation={rating.reputation} clubs={rating.clubs} internet={rating.internet} social={rating.social} food={rating.food} comment={rating.comment} created_at={rating.created_at} user={rating.user}/>
          ))
        }

      </ul>
    </div>

      </>

  );
}
