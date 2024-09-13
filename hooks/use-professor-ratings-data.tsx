// hooks/useProfessorRatings.ts
import { useGetProfessorRatingsQuery } from '@/redux/services/apiSlice';

import {ProssorRatingType} from '@/types'

interface Tag {
    tags__tag: string;
    tag_count: number;
}

interface RatingCount {
    rating: number;
    count: number;
}
interface Professor {
    id: number;
    name_of_school: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    department: number;
    directory_listing_of_professor: string;
  }

interface ProfessorRatingsData {
    ratings: ProssorRatingType[];
    total_ratings_count: number;
    take_again_count: number;
    avg_difficulty: number;
    top_tags: Tag[];
    rating_counts: RatingCount[];
    take_again_percentage: number;
    professor: Professor
}

export default function useProfessorRatingsData(professorId: string) {
    const { data, isLoading, error } = useGetProfessorRatingsQuery(professorId);

    return {
        data: data as ProfessorRatingsData,
        isLoading,
        error,
    };
}
