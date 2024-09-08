'use client'
import { useProfessorRatingsData } from "@/hooks";
import TeacherInfo from "./TeacherInfo";
import TeacherRatings from "./TeacherRatings";
import TeacherRatingsTabs from "./TeacherRatingsTabs";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  const {data, error, isLoading} = useProfessorRatingsData(id) 


  if(isLoading){
    return (
      <div>Loading</div>
    )
  }
  if(error){
    return (
      <div>error feaching professor data</div>
    )
  }
  const {ratings,  take_again_percentage, avg_difficulty, rating_counts, total_ratings_count, top_tags} = data
  const courses = ratings.map(rating => rating.course_code);

  console.log(data)
  return (
    <div className="my-0 mx-auto w-full lg:max-w-[1280px] min-h-[calc(-240px+100vh)] overflow-hidden">
        <div className="lg:min-w-[calc(926px)] flex flex-row justify-between mb-1.5 pl-6">
          <TeacherInfo take_again_percentage={take_again_percentage} avg_difficulty={avg_difficulty} top_tags={top_tags}/>
          <TeacherRatings />
        </div>
        <TeacherRatingsTabs  total_ratings_count={total_ratings_count} courses={courses}/>
    </div>

  );
}
