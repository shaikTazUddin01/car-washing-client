import { baseApi } from "../Api/baseApi";



export const bookingSlot = baseApi.injectEndpoints({
endpoints:(builder)=>({
   
    createBooking:builder.mutation({
        query:(data)=>({
            url:'/bookings',
            method:"POST",
            body:data
        }),
        // invalidatesTags:['slot']
    })
})
})

export const {useCreateBookingMutation}=bookingSlot