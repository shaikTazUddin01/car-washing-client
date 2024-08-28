import { baseApi } from "../Api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signupApi: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    LoginApi: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    myAccountInFo: builder.query({
      query: (id) => {
        // console.log('object',id);
        return {
          url: `/auth/myAccountInFo/${id}`,
          method: "GET",
        };
      },
      providesTags: ["auth"],
    }),
    AllUser: builder.query({
      query: () => {
        // console.log('object',id);
        return {
          url: "/auth/users",
          method: "GET",
        };
      },
      providesTags: ["auth"],
    }),
    updateMyAccountInFo: builder.mutation({
      query: (args) => {
        // console.log('---->',args);
        return {
          url: `/auth/myAccountInFo/${args?.id}`,
          method: "PUT",
          body: args.data,
        };
      },
      invalidatesTags: ["auth"],
    }),
    updateUserRole: builder.mutation({
      query: (args) => {
        // console.log('---->',args);
        return {
          url: `/auth/userRole/${args?.id}`,
          method: "PUT",
          body: args.data,
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignupApiMutation,
  useLoginApiMutation,
  useMyAccountInFoQuery,
  useUpdateMyAccountInFoMutation,
  useAllUserQuery,
  useUpdateUserRoleMutation
} = authApi;
