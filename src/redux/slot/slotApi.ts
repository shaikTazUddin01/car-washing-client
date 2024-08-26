import { baseApi } from "../Api/baseApi";



export const slotApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    getAvaliableSlot:builder.query({
        query:()=>({
            url:'/slots/availability',
            method:"GET"
        })
    })
})
})

export const {useGetAvaliableSlotQuery}=slotApi