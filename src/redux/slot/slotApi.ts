import { baseApi } from "../Api/baseApi";

export const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvaliableSlot: builder.query({
      query: (args) => ({
        url: "/slots/availability",
        method: "GET",
        params: args,
      }),
      providesTags: ["slot"],
    }),
    createSlot: builder.mutation({
      query: (data) => ({
        url: "/services/slots",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["slot"],
    }),
    updateslot: builder.mutation({
      query: (args) => {
        console.log('---->',args?.isBooked);
        return {
          url: `/slots/updateSlot/${args?.id}`,
          method: "PUT",
          body:{isBooked:args?.isBooked},
        };
      },
      invalidatesTags: ["slot"],
    }),
  }),
});

export const {
  useGetAvaliableSlotQuery,
  useCreateSlotMutation,
  useUpdateslotMutation,
} = slotApi;
