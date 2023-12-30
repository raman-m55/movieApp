import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/scrollbar';

import 'swiper/css';
import './genre.css'
const Genre = ({results , type}) => {
    
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={7}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar ,A11y ]}
      breakpoints={{
        320 : {
            slidesPerView: 3,
            spaceBetween: 10,
        } ,
        640: {
          slidesPerView: 4,
          spaceBetween: 3,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 8,
        },
        1280 : {
            slidesPerView :8 ,
            spaceBetween : 10 
        }
      }}
    >
      {results && results.map((item , key) => (
        <SwiperSlide key={key}>
          <button className='button-tag zoom' style={{backgroundColor: key % 2 === 0 ? '#E50914' : '#17161B'}}>
              {item?.name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Genre ;