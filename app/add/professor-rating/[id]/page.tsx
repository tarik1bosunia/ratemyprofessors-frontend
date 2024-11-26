'use client';
import { RateProfessor, RatingHeader } from '@/components/ratings';
import { useGetProfessorRatingsQuery } from '@/redux/services/apiSlice';

interface Props {
  params: {
    id: string;
  };
}

interface Professor {
  id: number;
  name_of_school: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  department: number;
  directory_listing_of_professor: string;
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

  const { name_of_school, first_name, last_name, department } = data!.professor;

  return (
    <>
      <RatingHeader
        firstName={first_name}
        lastName={last_name}
        courseName={String(department)}
        name_of_school={name_of_school}
      />
      <RateProfessor />
    </>
  );
}
