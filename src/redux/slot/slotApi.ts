import { baseApi } from "../Api/baseApi";



export const slotApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    getAvaliableSlot:builder.query({
        query:()=>({
            url:'/slots/availability',
            method:"GET"
        })
    }),
    createSlot:builder.mutation({
        query:(data)=>({
            url:'/services/slots',
            method:"POST",
            body:data
        })
    })
})
})

export const {useGetAvaliableSlotQuery,useCreateSlotMutation}=slotApi