// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { School } from '@/types'; 

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     addSchool: builder.mutation<School, Partial<School>>({
//       query: (newSchool) => ({
//         url: '/schools/',
//         method: 'POST',
//         body: newSchool,
//       }),
//     }),
//   }),
// });

// export const { useAddSchoolMutation } = apiSlice;
