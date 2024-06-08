import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const searchApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://www.omdbapi.com/'}),
    endpoints: (builder) =>({
        getResults: builder.query<any,string>({
            query:(searchTerm: string)=>({
                url: '',
                params: {
                    apikey: '81a651ff',
                    s: searchTerm,
                  },
            }),

        })
    })
});

export const {
    useGetResultsQuery,
}= searchApi;
export default searchApi;