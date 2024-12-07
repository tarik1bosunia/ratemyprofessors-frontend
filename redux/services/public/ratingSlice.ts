import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

import {
  ProfessorRatingsApiResponse,
  RatingsQuery,
  SchoolRatingsApiResponse,
} from "../types";

import {
  AverageProfessorRatingsType,
  AverageSchoolRatingsType,
  ProfessorDetailsType,
  School,
} from "@/types";


export const publicRatingsApi = createApi({
  reducerPath: "publicRatingsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProfessorRatings: builder.query<ProfessorDetailsType, string>({
      query: (id) => `ratings/professors/${id}/`,
    }),

    ProfessorRatings: builder.query<ProfessorRatingsApiResponse, RatingsQuery>({
      query: (queryParams) => {
        if ("url" in queryParams) {
          // Handle the case when a full URL is provided
          // http://localhost:8000/api/ratings/professors/1/ratings/?page=1&q=HI101
          return queryParams.url;
        } else {
          // Handle the case when search parameters are provided
          const { id: professor_id, page, pageSize } = queryParams;
          return `ratings/professors/${professor_id}/ratings&page=${page}&page_size=${pageSize}`;
        }
      },
    }),

    // http://localhost:8000/api/ratings/schools/1

    getSchool: builder.query<School, string>({
      query: (id) => `ratings/schools/${id}/`,
    }),

    getAverageSchoolRatings: builder.query<
      AverageSchoolRatingsType,
      string | number
    >({
      query: (id) => `/ratings/average-ratings-school/${id}/`,
    }),

    getAverageProfessorRatings: builder.query<
      AverageProfessorRatingsType,
      string | number
    >({
      query: (id) => `/ratings/average-ratings-professor/${id}/`,
    }),

    // getSchoolRatings: builder.query<SchoolRatingsType[], number>({
    //   query: (school_id) => `/ratings/school-rating/${school_id}`,
    // }),

    getSchoolRatings: builder.query<SchoolRatingsApiResponse, RatingsQuery>({
      query: (queryParams) => {
        if ("url" in queryParams) {
          // Handle the case when a full URL is provided
          return queryParams.url;
        } else {
          // Handle the case when search parameters are provided
          const { id: school_id, page, pageSize } = queryParams;
          return `/ratings/school-rating/${school_id}&page=${page}&page_size=${pageSize}`;
        }
      },
    }),

    getCourseCodesByProfessor: builder.query<string[], string>({
      query: (professorId) =>
        `/ratings/professors/${professorId}/course_codes/`,
    }),
  }),
});

export const {
  useGetSchoolRatingsQuery,
  useGetProfessorRatingsQuery,
  useGetSchoolQuery,
  useGetAverageSchoolRatingsQuery,
  useGetAverageProfessorRatingsQuery,
  useProfessorRatingsQuery,
  useGetCourseCodesByProfessorQuery,
} = publicRatingsApi;
