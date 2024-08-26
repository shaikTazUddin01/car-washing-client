import { baseApi } from "../Api/baseApi";



export const authApi = baseApi.injectEndpoints({
endpoints:(builder)=>({
    signupApi:builder.mutation({
        query:(data)=>({
            url:'/auth/signup',
            method:"POST",
            body:data
        })
    })
})
})

export const {useSignupApiMutation}=authApi