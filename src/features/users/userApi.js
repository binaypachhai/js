import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../constant/constants'



export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: (query) => ({
        url: '/users',
        method: 'GET'
      })
    }),

    addUsers: builder.mutation({
      query: (q) => ({
        url: '/users',
        body: q,
        method: 'POST'
      })
    })

  })
})




export const { useGetUsersQuery, useAddUsersMutation } = userApi;