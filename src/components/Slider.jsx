import React, { useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Scrollbar ,  A11y } from 'swiper/modules';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'swiper/css';
import 'swiper/css/scrollbar';

import './slider.css';
import { Link } from 'react-router-dom';


function getTruncatedTitle(title, maxLength) {
    if (title) {
        return title.substring(0, maxLength);
    }
    return ''; 
}


const Slider = ({results , type}) => {

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={10}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar ,A11y ]}
      breakpoints={{
        320 : {
            slidesPerView: 3,
            spaceBetween: 3,
        } ,
        640: {
          slidesPerView: 4,
          spaceBetween: 2,
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
        {results && results?.map((item , key) => (
            <SwiperSlide key={key} style={{boxSizing : 'border-box'}} >
                <Link to={`/movie/${item?.id}/${type}`} className='link'>

                    {item?.poster_path && <Card sx={{ maxWidth: 120  , backgroundColor : '#0D0C11' , boxShadow : 'none'}}  >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="160"
                            image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography  variant="subtitle3" component="div" color='white'>
                                
                                {type === 'movie' ? getTruncatedTitle(item?.title , 30)  : getTruncatedTitle(item?.name,30)}
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>}
                </Link>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Slider