// types.ts

export interface School {
    id?: number;
    name_of_school: string;
    school_website: string;
    location: string;
    state: number; // Assuming state and country are referenced by their ID
    country: number;
    terms_privacy: boolean;
  }

export interface Professor {
    id?: number;
    name_of_school: string;
    first_name: string,
    middle_name: string,
    last_name: string,
    department: Number,
    directory_listing_of_professor: string,
    terms_privacy: boolean;
  }


  export interface Country {
    id: number;
    name: string;
  }
  
  export interface State {
    id: number;
    name: string;
    country: number; // Assuming each state is referenced by its country ID
  }

  export interface Department {
    id: number;
    name: string;
  }

  export interface ProfessorsTag {
    id: number;
    tag: string;
  }

  export interface SchoolRatingsType {
    id?: number,
    safety: number,   
    oppputunites: number,
    location: number,
    facilities: number,
    happiness: number, 
    reputation: number,
    clubs: number,
    internet: number,
    social: number,
    food: number,
    comment: string,
    created_at: string,
    user: number,
}

import {locales} from './config';

export type Locale = (typeof locales)[number];

export type SearchType = "schools" | "professors"

export interface UsrProfileType{
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  school: string,
  field_of_study: string,
  expected_year_of_graduation: string
}

export interface ProssorRatingType {
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
  created_at: string
}

export type AverageSchoolRatingsType = {
  safety: number,
  oppputunites: number,
  location: number,
  facilities: number,
  happiness: number,
  reputation: number,
  clubs: number,
  internet: number,
  social: number,
  food: number,
}

// types for professor view page
type Tag = {
  tags__tag: string;
  tag_count: number;
};

type RatingCount = {
  rating: number;
  count: number;
};

export interface CreditCounts {
  for_credit: number;
  not_for_credit: number;
  none: number;
}

export interface AttendenceCounts {
  mandatory: number;
  not_mandatory: number;
  none: number;
}

export type ProfessorDetailsType = {
  professor: Professor
  total_ratings_count: number;
  take_again_percentage: number;
  avg_difficulty: number;
  top_tags: Tag[];
  rating_counts: RatingCount[];
  attendance_counts: AttendenceCounts;
  credit_counts: CreditCounts;
};
  