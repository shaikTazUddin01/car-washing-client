import { baseApi } from "../Api/baseApi";



export const serviceApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    getServices:builder.query({
        query:()=>({
            url:'/',
            method:"GET"
        })
    })
})
})

export const {useGetServicesQuery}=serviceApi