import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";

import {
  SearchProfessorApiResponse,
  SearchQuery,
  SearchSchoolsApiResponse,
} from "../types";

export const publicSearchApi = createApi({
  reducerPath: "publicSearchApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    searchSchools: builder.query<SearchSchoolsApiResponse, SearchQuery>({
      query: (queryParams) => {
        if ("url" in queryParams) {
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
        if ("url" in queryParams) {
          // Handle the case when a full URL is provided
          return queryParams.url;
        } else {
          // Handle the case when search parameters are provided
          const { q, page, pageSize } = queryParams;
          return `/search/professors/?q=${q}&page=${page}&page_size=${pageSize}`;
        }
      },
    }),
  }),
});

export const { useSearchSchoolsQuery, useSearchProfessorsQuery } = publicSearchApi;
