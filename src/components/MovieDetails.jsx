// import React from 'react'
import * as React from 'react';

import { useParams } from 'react-router-dom'
import { useGetDetailsQuery, useGetVideoQuery , useGetCreditsQuery  , useGetSimilarQuery} from '../services/moveiApi';
import './movieDetails.css' ;
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ReactPlayer from 'react-player'
import { format } from 'date-fns';
import { Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide , Swiper } from 'swiper/react';
import {Card , CardContent ,CardMedia , Typography  , Slider} from './index'
import { CardActionArea } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const MovieDetails = () => {
  const {page , type } = useParams();
  const {data , isLoading , error} = useGetDetailsQuery({type,page})
  const {data : data2 , isLoading : isLoading2 , error : error2} = useGetVideoQuery({type , page})
  const {data : data3 , isLoading : isLoading3 , error : error3} = useGetCreditsQuery({type , page}) ;
  const {data : data4 , isLoading : isLoading4 , error : error4} = useGetSimilarQuery({type , page}) ;
  
  if(isLoading || isLoading2) return 'Loading';

  const results = data2?.results?.filter((item) => item?.official)
  const results2 = data3?.cast ;
  const results4 = data4?.results

  
  return (
    <div className='container-movie_details'>
      <div className='row-1' style={{background :  ` linear-gradient(97deg , rgba(0, 0, 0, 0.96) 20.2% , rgba(0, 0, 0, 0)),  url(https://image.tmdb.org/t/p/original${data?.backdrop_path})` 
           , width: '100%' , height : '100%'   , backgroundRepeat: 'no-repeat' , objectFit: 'cover' , backgroundPosition: 'top', lightgray: '50%'
            }}>
        <div className='display-img'>
          <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt="img" />
        </div>
        <div className='details-movie'>
          <h1>{data?.title}</h1>
          <p>Name: <span className='span'>{type === 'movie' ?  data?.title : data?.name}</span></p>
          <p>Time: <span className='span'>{data?.runtime} minutes</span></p>
          <p>Date: <span className='span'>{type === 'movie' ? data?.release_date : data?.first_air_date}</span></p>
          <p>Genres: <span className='span'>{data.genres && data.genres.map((item) => item.name ) } </span></p>
          <p>Language: <span className='span'>{data?.spoken_languages.english_name} minutes</span></p>
          <div className='rate'><ThumbUpAltIcon  style={{color : '#43a047' , margin: 0}}/> <p>{data?.vote_average}</p></div>
        </div>
      </div>
      <div className='row-2'>
        <h1>About the movie</h1>
        <p>{data?.overview}</p>
      </div>
      <div className='row-3'>
{  results &&    <ReactPlayer width={'100%'}  playbackRate={true} fluid={true} url={`https://www.youtube.com/watch?v=${results[0]?.key}`} className="react-player" controls/>}
      <h1>{results[0]?.name}</h1>
      <p><span >Published at : </span>{results[0]?.published_at && format(new Date(`${results[0]?.published_at}`), 'dd MMMM yyyy')} </p>
      </div>

      <div className='row-4'>
        <div className='title-row'>
          <PlayArrow style={{color : 'E50914'}} />
          <h1>Actors</h1>
        </div>
        <Swiper
            spaceBetween={0}
            slidesPerView = {9}
            watchOverflow = {false}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320 : {
                  slidesPerView: 3,
                  spaceBetween: 4,
              } ,
              640: {
                slidesPerView: 4,
                spaceBetween: 3,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 8,
              },
              1280 : {
                  slidesPerView :10 ,
                  spaceBetween : 10 
              }
            }}
            >
            {results2 && results2.map((item , key) => (
              <SwiperSlide key={key}>
                  {item?.profile_path && <Card sx={{ maxWidth: 120 , backgroundColor : '#0D0C11' , boxShadow : 'none' , color : '#fff' }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={`https://image.tmdb.org/t/p/original${item?.profile_path}`} 
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography variant="caption" display="block" gutterBottom>
                          name : {item?.name}
                        </Typography>

                      </CardContent>
                    </CardActionArea>
                  </Card>}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className='row-5'>
        <div className='title-row'>
          <PlayArrow style={{color : 'E50914'}} />
          <h1>Similar </h1>
        </div>
      <Slider results={results4} type={type}/>
      </div>
    </div>
  )
}

export default MovieDetails