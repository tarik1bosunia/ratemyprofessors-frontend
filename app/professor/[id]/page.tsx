"use client";
import { useProfessorRatingsData } from "@/hooks";
import TeacherInfo from "./TeacherInfo";
import TeacherRatings from "./TeacherRatings";
import { useGetProfessorRatingsQuery } from "@/redux/services/apiSlice";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  const { data, isError, isLoading } = useGetProfessorRatingsQuery(id);

  if (isLoading) {
    return <div>Loading professor data...</div>;
  }
  if (isError) {
    return <div>error feaching professor data!!!!</div>;
  }
  const {
    professor,
    take_again_percentage,
    avg_difficulty,
    top_tags,
    rating_counts
  } = data!;

  const ratingCount = rating_counts.map(rating_count => rating_count.count)

  return (
    <div className="lg:min-w-[calc(926px)] flex flex-row justify-between mb-1.5 pl-6">
      <TeacherInfo
        professor={professor}
        take_again_percentage={take_again_percentage}
        avg_difficulty={avg_difficulty}
        top_tags={top_tags}
      />
      <TeacherRatings ratingCounts={ratingCount} />
    </div>
  );
}
