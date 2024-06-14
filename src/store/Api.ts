// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

// const searchApi = createApi({
//     reducerPath: 'serchApi',
//     baseQuery: fetchBaseQuery({baseUrl:'http://www.omdbapi.com/'}),
//     endpoints: (builder) =>({
//         getResults: builder.query<any,string>({
//             query:(searchTerm: string)=>({
//                 url: '',
//                 params: {
//                     apikey: '81a651ff',
//                     s: searchTerm,
//                   },
//             }),

//         })
//     })
// });

// export const { useGetResultsQuery  } = searchApi;
// export default searchApi;

// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const AppApi = createApi({
  reducerPath: "AppApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
  endpoints: () => ({}),
})

export default AppApi;