import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../baseQuery";


export const authRatingsApi = createApi({
  reducerPath: "authRatingsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
 
  }),
});

export const {

} = authRatingsApi;
