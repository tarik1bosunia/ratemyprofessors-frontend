import {SchoolRating} from "@/components/ratings";
import  {useShowSchoolRatings}  from "@/hooks";


export default function ShowSchoolRatings() {

  // const {
  //   safety,
  //   oppputunites,
  //   location,
  //   facility,
  //   happiness,
  //   reputation,
  //   clubs,
  //   internet,
  //   social,
  //   food,
    
  // } = useShowSchoolRatings();
  // console.log('school ratings aveageRatings.tsx: ', schoolRatings)

  return (
    <div className="md:max-w-[calc(926px)]">
      <div className="text-xl font-bold text-left">104 Ratings</div>
      <ul className="list-none">
        {/* {
          schoolRatings.map((rating) => (
            <SchoolRating key={rating.id} id={rating.id} safety={rating.safety} oppputunites={rating.oppputunites} location={rating.location} facility={rating.facility} happiness={rating.happiness} reputation={rating.reputation} clubs={rating.clubs} internet={rating.internet} social={rating.social} food={rating.food} comment={rating.comment} created_at={rating.created_at} user={rating.user}/>
          ))
        } */}

      </ul>
    </div>
  );
}
