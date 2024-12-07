import { Professor, School, SchoolRatingsType } from "@/types";

type Rating = {
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
  };

export interface SearchSchoolsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: School[];
}

export interface SearchProfessorApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Professor[];
}

export interface SchoolRatingsApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: SchoolRatingsType[];
  }
  
export  interface ProfessorRatingsApiResponse{
    count: number;
    next: string | null;
    previous: string | null;
    results: Rating[];
  }
// Define a type for the search parameters
export type SearchQuery = 
  | { q: string; page: number; pageSize: number }  // Search parameters
  | { url: string };   


export type RatingsQuery = 
  | { id: string; page: number; pageSize: number }  // pagination parameters
  | { url: string };  

// interface Professor {
//     id: number;
//     name_of_school: string;
//     first_name: string;
//     middle_name: string;
//     last_name: string;
//     department: number;
//     directory_listing_of_professor: string;
//   }
  