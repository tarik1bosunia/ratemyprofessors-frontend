import { Country, State, Department, ProfessorsTag, SchoolRatingsType, UsrProfileType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { setAuth, logout } from "../fetures/authSlice";
import { Mutex } from "async-mutex";
import { RootState } from "@/redux/store";

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
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
    searchSchools: builder.query({
      query: (query) => `/search/schools/?q=${query}`,
    }),
    searchProfessors: builder.query({
      query: (query) => `/search/professors/?q=${query}`,
    }),
    getSchoolRatings: builder.query<SchoolRatingsType[], number>({
      query: (school_id) => `/ratings/school-rating/${school_id}`,
    }),
    retrieveUser: builder.query<UsrProfileType, void>({
      query: () => "/user/profile/",
      
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
  useRetrieveUserQuery
} = apiSlice;
