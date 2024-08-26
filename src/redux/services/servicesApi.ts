import { baseApi } from "../Api/baseApi";



export const serviceApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    getServices:builder.query({
        query:()=>({
            url:'/services',
            method:"GET"
        })
    }),
    getSingleServices:builder.query({
        query:(id)=>({
            url:`/services/${id}`,
            method:"GET",
        })
    })
})
})

export const {useGetServicesQuery,useGetSingleServicesQuery}=serviceApi