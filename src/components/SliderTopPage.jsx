import React, { useEffect, useRef, useState } from 'react'
import {useGetNowPlayingQuery} from '../services/moveiApi';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';



import { Autoplay, Pagination, Navigation ,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './sliderTopPage.css';
import { PlayArrow } from '@mui/icons-material';


function getTruncatedTitle(title, maxLength) {
  if (title) {
      return title.substring(0, maxLength);
  }
  return '';
}


const SliderTopPage = () => {
    const {data , isLoading , error , refetch}  = useGetNowPlayingQuery()

    const results = data?.results
    


  if(isLoading) return 'Loading...'


  console.log(results)
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView = {1}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{ clickable: true }}

    modules={[Autoplay, Pagination, Navigation ]}
        style={{
    "--swiper-pagination-color": '#E50914', 
    "--swiper-pagination-bullet-inactive-color": "#999999",
    "--swiper-pagination-bullet-inactive-opacity": "0.7",
  }}
    >
      {results && results?.map((item , key) => (
        <SwiperSlide key={key}>
         {item?.backdrop_path &&  <div className='container-top-page'  style={{backgroundImage :  `linear-gradient(97deg , rgba(0, 0, 0, 0.96) 3.2% , rgba(0, 0, 0, 0)),  url(https://image.tmdb.org/t/p/original${item?.backdrop_path})` 
           , width: '100%'  , height: '79vh' , backgroundRepeat: 'no-repeat' , backgroundSize: 'cover' , backgroundPosition: 'center', lightgray: '50%'
            }}>  
            <div className='container-movie'>
              <div className='top-title'>
                <p>Top</p>
              </div>
                <div className='h2-tag'>
                  <h2>{item?.title}</h2>
                </div>
                <div className='p-tag'>
                  <p>{item?.overview}</p>
                </div>
                <div className='rate'>
                  <ThumbUpOffAltIcon />
                  <p>{item?.vote_average}</p>
                </div>
                 <div className='button-tag zoomB'>
                <PlayArrow/> <p>Watch</p>
              </div>
            </div>
            
 
            </div> }
        </SwiperSlide>
      ))}

    </Swiper>
  )
}

export default SliderTopPage;

//  <div className='container-top-page' style={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.4),
// rgba(0, 0, 0, 1)),   url(https://image.tmdb.org/t/p/original${?.backdrop_path})`}}>
  

// </div> 
// <SwiperSlide key={key} >
// <div className='slider'>
//   <div className='childe-slider'>
//    <h2>{item?.title}</h2>
//       <div className='title-rate'>
//         <ThumbUpOffAltIcon />
//         <p>{item?.vote_average }</p>
//       </div>
      
//       <p id='dec'>{item?.overview && getTruncatedTitle(item?.overview , 100)+' ...'}</p>
//     <Link to={`/movie/${item?.id}/${type}`} className='link'>
//       <div className='more'>
//           <p>See more</p>
//       </div>
//     </Link>
//   </div>
//   <div className='childe-img' >
//     <div className='container-img'>
//       <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt={item.title} />