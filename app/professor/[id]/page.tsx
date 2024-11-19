"use client";
import { useProfessorRatingsData } from "@/hooks";
import TeacherInfo from "./TeacherInfo";
import TeacherRatings from "./TeacherRatings";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params: { id } }: Props) {
  const { data, error, isLoading } = useProfessorRatingsData(id);

  if (isLoading) {
    return <div>Loading professor data...</div>;
  }
  if (error) {
    return <div>error feaching professor data!!!!</div>;
  }
  const {
    ratings,
    professor,
    take_again_percentage,
    avg_difficulty,
    top_tags,
  } = data;

  return (
    <div className="lg:min-w-[calc(926px)] flex flex-row justify-between mb-1.5 pl-6">
      <TeacherInfo
        professor={professor}
        take_again_percentage={take_again_percentage}
        avg_difficulty={avg_difficulty}
        top_tags={top_tags}
      />
      <TeacherRatings ratings={ratings} />
    </div>
  );
}
