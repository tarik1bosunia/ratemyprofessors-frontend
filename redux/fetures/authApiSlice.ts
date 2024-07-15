import { apiSlice } from "../services/apiSlice";

interface User {
  first_name?: string;
  last_name?: string;
  email: string;
}
interface socialAuthArgs {
  provider: string;
  state: string;
  code: string;
}
interface CreateUserResponse {
  success: boolean;
  user: User;
}

interface AddSchoolArgs {
  name_of_school: string;
  school_website: string;
  location: string;
  state: Number;
  country: Number;
  termsPrivacy: boolean;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUser: builder.query({
      query: () => "/users/me/",
    }),
    socialAuthenticate: builder.mutation<CreateUserResponse, socialAuthArgs>({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(
          state
        )}&code=${encodeURIComponent(code)}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login/",
        method: "POST",
        body: { email, password },
      }),
    }),
    registration: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/registration/",
        method: "POST",
        body: { email, password },
      }),
    }),
    verify: builder.mutation({
      query: () => ({
        url: "/user/verify/",
        method: "POST",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout/",
        method: "POST",
      }),
    }),

    activation: builder.mutation({
        query: ({uid, token}) => ({
          url: "user/activate/",
          method: "POST",
          body: {uid, token},
        }),
      }),

    resetPassword: builder.mutation({
        query: ({email}) => ({
          url: "user/reset-password/",
          method: "POST",
          body: {email},
        }),
      }),
      
    resetPasswordConfirm: builder.mutation({
        query: ({uid, token, new_password}) => ({
          url: "user/reset-password-confirm/",
          method: "POST",
          body: {uid, token, new_password},
        }),
      }), 
    checkEmail: builder.mutation({
        query: ({ email}) => ({
          url: "/user/check-email/",
          method: "POST",
          body: { email},
        }),
      }),
      
      addSchool: builder.mutation<{ success: boolean }, AddSchoolArgs>({
        query: ({ name_of_school, school_website, location, state, country, termsPrivacy }) => ({
          url: "/ratings/schools/",
          method: "POST",
          body: { name_of_school, school_website, location, state, country, termsPrivacy },
        }),
      }),  

      addProfessor: builder.mutation({
        query: (professor) => ({
          url: '/ratings/professors/create/',
          method: 'POST',
          body: professor,
        }),
      }),
      rateSchool: builder.mutation({
        query: ({reputation, facilites, internet, food, clubs, social, happiness, safety, comment, id}) => ({
          url: `/ratings/school-rating/1/`,
          method: 'POST',
          body: {
            reputation: parseInt(reputation), 
            facilities: parseInt(facilites),
            internet: parseInt(internet),
            food: parseInt(food),
            clubs: parseInt(clubs),
            social: parseInt(social),
            happiness: parseInt(happiness),
            safety: parseInt(safety),
            comment: comment,
          },
        }),
      }),

      getSchoolRatings: builder.query({
        query: (school_id) => `/ratings/school-rating/${school_id}`,
      }),

      rateProfessor: builder.mutation({
        query: ({        
          course_code,
          is_online_course,
          rating,
          difficulty,
          is_take_professor_again,
          was_class_taken_for_credit,
          was_use_textbook,
          was_attendence_mendatory,
          grade,
          tags,
          comment,
          id
        }) => ({
          url: `/ratings/professor-rating/${id}/`,
          method: 'POST',
          body: {
            course_code,
            is_online_course,
            rating: rating,
            difficulty: difficulty,
            is_take_professor_again,
            was_class_taken_for_credit,
            was_use_textbook,
            was_attendence_mendatory,
            grade,
            tags,
            comment,
          },
        }),
      }),
  
  }),
});

export const {
  useRetrieveUserQuery,
  useSocialAuthenticateMutation,
  useLoginMutation,
  useRegistrationMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useCheckEmailMutation,
  useAddDetailsMutation,
  useAddSchoolMutation,
  useAddProfessorMutation,
  // useUpdateUserMutation
  useRateSchoolMutation,
  useGetSchoolRatingsQuery,
  useRateProfessorMutation
} = authApiSlice;
