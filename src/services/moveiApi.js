import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const movieApi = createApi({
    reducerPath : 'movieApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://api.themoviedb.org/3',
        prepareHeaders : (headers) => {
            headers.set('accept' , 'application/json')
            headers.set('Authorization' , 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmZmMWQzNzI1OTY5MTYxYmY5ZDFiNTY1ZGQ3ODFlOSIsInN1YiI6IjY1NmUzY2JlM2RjMzEzMDBhY2FiZDQ0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X1EEOiHGjVTiz8puQ6c38bBA2u27UHGfIeDS-zatF6g')
            return headers
        }
    }),

    endpoints : (builder) => ({
        getPopularMovie : builder.query({
            query : (time) => `/trending/movie/${time}?language=en-US`
        }) ,

        getPopular : builder.query({
            query : (type) => `/${type}/popular?language=en-US&page=1`
        }) ,
        getDetails : builder.query({
            query : ({type,page}) => `/${type}/${page}?language=en-US`
        }),

        getCredits : builder.query({
            query : ({type , page}) => `/${type}/${page}/credits?language=en-US`
        }),

        getVideo : builder.query({
            query : ({type , page}) => `/${type}/${page}/videos?language=en-US`
        }) ,
        getResultSearch : builder.query({
            query : ({type , page}) => `/search/${type}?query=${page}&include_adult=false&language=en-US&page=1`
        }) ,

        getNowPlaying : builder.query({
            query : () => '/movie/now_playing?language=en-US&page=1'
        }) ,
        getGenres : builder.query({
            query : (type) => `/genre/${type}/list?language=en`
        }) ,
        getTopRated : builder.query({
            query : (type) => `/${type}/top_rated?language=en-US&page=1`
        }) ,
        getSimilar : builder.query({
            query : ({type , page}) => `/${type}/${page}/similar?language=en-US&page=1`
        }) ,
        getSearch : builder.query({
            query : (search) => `/search/multi?query=${search}&include_adult=false&language=en-US&page=1`
        })
    })
})


export const {useGetPopularMovieQuery , useGetTVSeriesOnAirQuery ,
        useGetPopularQuery  , useGetDetailsQuery , useGetCreditsQuery , useGetVideoQuery ,
        useGetResultSearchQuery  , useGetNowPlayingQuery , useGetGenresQuery ,useGetTopRatedQuery , useGetSimilarQuery , useGetSearchQuery} = movieApi

