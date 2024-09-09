import { AppApi } from '../store/Api'

const searchApi = AppApi.injectEndpoints({
  endpoints: (builder) =>({
    getResults: builder.query<any,string>({
        query:(searchTerm: string)=>({
            url: '/v1/search',
            method:'GET',
            params: {
                s: searchTerm,
              },
        }),

    })
}),
  overrideExisting: false,
})

export const { useGetResultsQuery } = searchApi

export default searchApi;