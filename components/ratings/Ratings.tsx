import SafetyIcon from '@/public/icons/ratings/safety_icon.svg'
import OppurtunitiesIcon from '@/public/icons/ratings/oppurtunities.svg'
import LocationIcon from '@/public/icons/ratings/location_icon.svg'
import FacilitiesIcon from '@/public/icons/ratings/facilities_icon.svg'
import HappinessIcon from '@/public/icons/ratings/happiness_icon.svg'
import ReputationIcon from '@/public/icons/ratings/reputation_icon.svg'
import ClubsIcon from '@/public/icons/ratings/clubs_icon.svg'
import InternetIcon from '@/public/icons/ratings/internet_icon.svg'
import SocialIcon from '@/public/icons/ratings/social_icon.svg'
import FoodIcon from '@/public/icons/ratings/food_icon.svg'
import {Rating} from '@/components/ratings'

type RatingType = {
    icon: string,
    title: string,
    rating: Number
}


export default function Ratings() {
    const ratings: RatingType[] = [
        {
           icon: SafetyIcon,
           title: "Safety",
           rating: 4.6
        },   
        {
            icon: OppurtunitiesIcon,
            title: "Oppputunites",
            rating: 3.5
         },         {
            icon: LocationIcon,
            title: "location",
            rating: 4.6
         },         {
            icon: FacilitiesIcon,
            title: "Facility",
            rating: 4.6
         },         {
            icon: HappinessIcon,
            title: "Happiness",
            rating: 4.6
         },         {
            icon: ReputationIcon,
            title: "Reputation",
            rating: 4.6
         },         {
            icon: ClubsIcon,
            title: "Clubs",
            rating: 4.6
         },         {
            icon: InternetIcon,
            title: "Internet",
            rating: 4.6
         },         {
            icon: SocialIcon,
            title: "Social",
            rating: 4.6
         },         {
            icon: FoodIcon,
            title: "Food",
            rating: 4.6
         }
   ]
    return (
        <div className="my-0 mx-auto max-w-[1280px] w-full mb-14 min-h-[calc(100vh-240px)] overflow-hidden">
        <div className="flex items-center justify-between mt-[6px] md:max-w-[calc(926px)]">
            <div className="pl-6 mt-[6px]">
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col">
                        <div className="text-[80px] leading-[80px] mb-[2px] font-poppins font-black">3.4</div>
                        <div className="text-[#7e7e7e] text-sm font-medium leading-[17px]">Overall Quality</div>
                    </div>
                </div>
            </div>
            <div className="mb-6 mr-6">
                <div className="gap-[110px] flex flex-col flex-wrap h-[264px] justify-between w-[628px]">
                    
                    {
                        ratings.map((rating, index) => (
                            <Rating key={index} icon={rating.icon} title={rating.title} rating={rating.rating} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
}