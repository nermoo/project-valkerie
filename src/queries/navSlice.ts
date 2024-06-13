import { AppApi } from '../store/Api'

const searchApi = AppApi.injectEndpoints({
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
}),
  overrideExisting: false,
})

export const { useGetResultsQuery } = searchApi

export default searchApi;