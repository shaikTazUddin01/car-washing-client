import { baseApi } from "../Api/baseApi";

export const bookingSlot = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),
    getBooking: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    myBooking: builder.query({
      query: () => ({
        url: "/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateBookingMutation ,useGetBookingQuery,useMyBookingQuery} = bookingSlot;
