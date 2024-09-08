// hooks/useProfessorRatings.ts
import { useGetProfessorRatingsQuery } from '@/redux/services/apiSlice';

interface Rating {
    professor: number;
    course_code: string;
    is_online_course: boolean;
    rating: number;
    difficulty: number;
    is_take_professor_again: boolean;
    was_class_taken_for_credit: boolean;
    was_use_textbook: boolean;
    was_attendance_mandatory: boolean | null;
    grade: string;
    tags: number[];
    comment: string;
}

interface Tag {
    tags__tag: string;
    tag_count: number;
}

interface RatingCount {
    rating: number;
    count: number;
}

interface ProfessorRatingsData {
    ratings: Rating[];
    total_ratings_count: number;
    take_again_count: number;
    avg_difficulty: number;
    top_tags: Tag[];
    rating_counts: RatingCount[];
    take_again_percentage: number;
}

export default function useProfessorRatingsData(professorId: string) {
    const { data, isLoading, error } = useGetProfessorRatingsQuery(professorId);

    return {
        data: data as ProfessorRatingsData,
        isLoading,
        error,
    };
}
