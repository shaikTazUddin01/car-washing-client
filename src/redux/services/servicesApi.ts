import { baseApi } from "../Api/baseApi";



export const serviceApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    addServices:builder.mutation({
        query:(data)=>({
            url:'/services',
            method:"POST",
            body:data
        })
    }),
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

export const {useGetServicesQuery,useGetSingleServicesQuery,useAddServicesMutation}=serviceApi