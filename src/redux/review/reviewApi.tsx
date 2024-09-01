import { baseApi } from "../Api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: (data) => ({
        url: "/review/create",
        method: "POST",
        body: data,
      }),
      
    }),
    getReview: builder.query({
      query: () => ({
        url: "/review/allReviews",
        method: "GET",
       
      }),
      
    }),
    
  }),
});

export const {
  useCreateReviewMutation,
  useGetReviewQuery
} = reviewApi;
