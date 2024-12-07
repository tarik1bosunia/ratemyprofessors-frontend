import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../baseQuery";

import { UserProfileType } from "@/types";

export const authUserApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({


    retrieveUser: builder.query<UserProfileType, void>({
      query: () => "/user/profile/",
    }),
  }),
});

export const { useRetrieveUserQuery } = authUserApi;
