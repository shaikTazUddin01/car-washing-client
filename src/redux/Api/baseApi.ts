import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { createApi } from "@reduxjs/toolkit/query/react";



const baseQuery=fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials:"include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes:['services','slot']
});
