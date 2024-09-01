import { baseApi } from "../Api/baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addServices: builder.mutation({
      query: (data) => ({
        url: "/services",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["services"],
    }),
    getServices: builder.query({
      query: (queries) => {
        // console.log('--->>',queries);
        return {
          url: "/services",
          method: "GET",
          params: queries,
        };
      },
      providesTags: ["services"],
    }),
    getSingleServices: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      providesTags: ["services"],
    }),
    deleteServices: builder.mutation({
      query: (id) => ({
        url: `/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["services"],
    }),
    UpdateServices: builder.mutation({
      query: (args) => ({
        url: `/services/${args.id}`,
        method: "PUT",
        body: args.serviceItem,
      }),
      invalidatesTags: ["services"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetSingleServicesQuery,
  useAddServicesMutation,
  useDeleteServicesMutation,
  useUpdateServicesMutation,
} = serviceApi;
