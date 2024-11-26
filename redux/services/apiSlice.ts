import { Country, State, Department, ProfessorsTag, SchoolRatingsType, UsrProfileType, AverageSchoolRatingsType, ProfessorDetailsType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { setAuth, logout } from "../fetures/authSlice";
import { Mutex } from "async-mutex";
import { RootState } from "@/redux/store";
import {API_BASE_URL} from "@/constants"

import { School } from "@/types";



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

interface Professor {
  id: number;
  name_of_school: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  department: number;
  directory_listing_of_professor: string;
}


interface SearchSchoolsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: School[];
}

interface SearchProfessorApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Professor[];
}

interface SchoolRatingsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SchoolRatingsType[];
}

interface ProfessorRatingsApiResponse{
  count: number;
  next: string | null;
  previous: string | null;
  results: Rating[];
}

// Define a type for the search parameters
type SearchQuery = 
  | { q: string; page: number; pageSize: number }  // Search parameters
  | { url: string };   


type RatingsQuery = 
  | { id: string; page: number; pageSize: number }  // pagination parameters
  | { url: string };  


  // create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        if (refreshToken) {
          const refreshResult = await baseQuery(
            {
              url: "user/token/refresh/",
              method: "POST",
              body: { refresh: refreshToken },
            },
            api,
            extraOptions
          );
          if (refreshResult.data) {
            const { access, refresh } = refreshResult.data as {
              access: string;
              refresh: string;
            };
            api.dispatch(setAuth({ access, refresh }));
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch(logout());
          }
        } else {
          api.dispatch(logout());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    // updateUser: builder.mutation({
    //     query: (userInfo) => ({
    //         url: '/user/update-personal-info/',
    //         method: 'POST',
    //         body: userInfo,
    //     })
    // }),
    addDetails: builder.mutation({
      query: ({
        first_name,
        last_name,
        school,
        field_of_study,
        expected_year_of_graduation = 2000,
      }) => ({
        url: "user/update-personal-info/",
        method: "PUT",
        body: {
          first_name,
          last_name,
          school,
          field_of_study,
          expected_year_of_graduation,
        },
      }),
    }),
    getCountries: builder.query<Country[], void>({
      query: () => "ratings/countries/",
    }),
    getStatesByCountry: builder.query<State[], number>({
      query: (countryId) =>
        `ratings/states/by_country/?country_id=${countryId}`,
    }),
    getDepartments: builder.query<Department[], void>({
      query: () => "ratings/departments/",
    }),
    getProfessorsTags: builder.query<ProfessorsTag[], void>({
      query: () => "ratings/professors_tags/",
    }),
    // searchSchools: builder.query({
    //   query: (query) => `/search/schools/?q=${query}`,
    // }),
    // searchSchools: builder.query<SearchSchoolsApiResponse, { q: string; page: number; pageSize: number }>({
    //   query: ({ q, page, pageSize }) => `/search/schools/?q=${q}&page=${page}&page_size=${pageSize}`,
    // }),

    searchSchools: builder.query<SearchSchoolsApiResponse, SearchQuery>({
      query: (queryParams) => {
        if ('url' in queryParams) {
          // Handle the case when a full URL is provided
          return queryParams.url;
        } else {
          // Handle the case when search parameters are provided
          const { q, page, pageSize } = queryParams;
          return `/search/schools/?q=${q}&page=${page}&page_size=${pageSize}`;
        }
      },
    }),

    searchProfessors: builder.query<SearchProfessorApiResponse, SearchQuery>({
      query: (queryParams) => {
        if ('url' in queryParams) {
          // Handle the case when a full URL is provided
          return queryParams.url;
        } else {
          // Handle the case when search parameters are provided
          const { q, page, pageSize } = queryParams;
          return `/search/professors/?q=${q}&page=${page}&page_size=${pageSize}`;
        }
      }
    }),



    retrieveUser: builder.query<UsrProfileType, void>({
      query: () => "/user/profile/",
    }),

    getProfessorRatings: builder.query<ProfessorDetailsType, string>({
      query: (id) => `ratings/professors/${id}/`,
  }),


ProfessorRatings: builder.query<ProfessorRatingsApiResponse, RatingsQuery>({
  query: (queryParams) => {
    if ('url' in queryParams) {
      // Handle the case when a full URL is provided
      // http://localhost:8000/api/ratings/professors/1/ratings/?page=1&q=HI101
      return queryParams.url;
    } else {
      // Handle the case when search parameters are provided
      const { id: professor_id, page, pageSize} = queryParams;
      return `ratings/professors/${professor_id}/ratings&page=${page}&page_size=${pageSize}`;
    }
  }
}),


  // http://localhost:8000/api/ratings/schools/1

  getSchool: builder.query<School, string>({
      query: (id) => `ratings/schools/${id}/`,
  }),

  getAverageSchoolRatings: builder.query<AverageSchoolRatingsType, string | number>({
    query: (id) => `/ratings/average-ratings-school/${id}/`,
  }),

  // getSchoolRatings: builder.query<SchoolRatingsType[], number>({
  //   query: (school_id) => `/ratings/school-rating/${school_id}`,
  // }),

  getSchoolRatings: builder.query<SchoolRatingsApiResponse, RatingsQuery>({
    query: (queryParams) => {
      if ('url' in queryParams) {
        // Handle the case when a full URL is provided
        return queryParams.url;
      } else {
        // Handle the case when search parameters are provided
        const { id: school_id, page, pageSize } = queryParams;
        return `/ratings/school-rating/${school_id}&page=${page}&page_size=${pageSize}`;
      }
    }
  }),

  getCourseCodesByProfessor: builder.query<string[], string>({
    query: (professorId) => `/ratings/professors/${professorId}/course_codes/`,
  }),


  }),
});

export const {
  useGetCountriesQuery,
  useGetStatesByCountryQuery,
  useGetDepartmentsQuery,
  useSearchSchoolsQuery,
  useSearchProfessorsQuery,
  useGetProfessorsTagsQuery,
  useGetSchoolRatingsQuery,
  useRetrieveUserQuery,
  useGetProfessorRatingsQuery,
  useGetSchoolQuery,
  useGetAverageSchoolRatingsQuery,
  useProfessorRatingsQuery,
  useGetCourseCodesByProfessorQuery
} = apiSlice;
