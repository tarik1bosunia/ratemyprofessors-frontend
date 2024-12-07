import { createApi } from "@reduxjs/toolkit/query/react";

import { Country, Department, ProfessorsTag, State } from "@/types";
import { baseQuery } from "../baseQuery";

export const publicMetadataApi = createApi({
  reducerPath: "publicMetadataApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
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
  }),
});

export const {
  useGetCountriesQuery,
  useGetStatesByCountryQuery,
  useGetDepartmentsQuery,
  useGetProfessorsTagsQuery,
} = publicMetadataApi;
