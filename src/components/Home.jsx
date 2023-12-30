import React, { useEffect, useState } from 'react'
import { Button  , Slider , SliderTopPage , Genre
,ButtonGroup } from './index';
import {useGetPopularMovieQuery , useGetPopularQuery , useGetGenresQuery , useGetTopRatedQuery} from '../services/moveiApi';
import './Home.css';
import {createTheme , ThemeProvider, useTheme}   from '@mui/material/styles'
import { PlayArrow } from '@mui/icons-material';

 const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#E50914',
      },
      secondary: {
        main: '#E50914',
      },},}
)




const Home = () => {
  const outerTheme = useTheme();

  const [type , setType] = useState('tv');
  const [type2 , setType2] = useState('tv');
  const [time , setTime] = useState('day');
  const {data, isLoading, error , refetch} = useGetPopularMovieQuery(time);
  const {data : data2 , isLoading : isLoading2 , error : error2 , refetch : refetch2} = useGetPopularQuery(type)
  const {data : data3 , isLoading : isLoading3 , error : error3 , refetch : refetch3} = useGetGenresQuery(type)
  const {data : data4 , isLoading : isLoading4 , error : error4 , refetch : refetch4} = useGetTopRatedQuery(type);
  useEffect(()=>{refetch() }, [type , time , refetch , refetch2 , refetch4])
  const results = data?.results ;
  const results2 = data2?.results;
  const results3 = data3?.genres ; 
  const results4 = data4?.results;
  console.log(results4);


  const buttons = [
    <Button key="one" onClick={() => {setTime('day')} }>Today</Button>,
    <Button key="two" onClick={() => setTime('week')}>This Week</Button>,
  ];


  const buttons2 = [
    <Button key="TV" onClick={(e) => setType('tv')}>TV</Button>,
    <Button key="Movie" onClick={(e) => setType('movie')}>Movie</Button>,
  ];
  

  const buttons3 = [
    <Button key="one" onClick={() => {setType2('day')} }>Today</Button>,
    <Button key="two" onClick={() => setType2('week')}>This Week</Button>,
  ];
  
  

  return (
    <div className='container-home' >
      <div className='top-page'>
        <SliderTopPage type={type}/>
      </div>
      <div className='genre-component'>

          <Genre results={results3} type={type}/>

      </div>
      <div className='container-card-slider'>
        <div className='row'>
          <div className='head-card'>
            <div className='title-card'>
              <PlayArrow style={{color : '#E50914'}} /> 
              <h1>Trending</h1>
            </div>
            <ThemeProvider theme={theme}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons">
                {buttons}
            </ButtonGroup>  
            </ThemeProvider>

          </div>
          <div className='container-card'>
            <Slider results={results} type='movie'/>
          </div>
        </div>

        <div className='row'>
          <div className='head-card'>
            <div className='title-card'>
              <PlayArrow style={{color : '#E50914'}} /> 
              <h1>What's Popular</h1>
            </div>
            <ThemeProvider theme={theme}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons">
                {buttons2}
            </ButtonGroup>  
            </ThemeProvider>

          </div>
          <div className='container-card'>
            <Slider results={results2} type={type} />
          </div>
        </div>


        <div className='row'>
          <div className='head-card'>
            <div className='title-card'>
              <PlayArrow style={{color : '#E50914'}} /> 
              <h1>Highly rated</h1>
            </div>
            <ThemeProvider theme={theme}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons">
                {buttons2}
            </ButtonGroup>  
            </ThemeProvider>

          </div>
          <div className='container-card'>
            <Slider results={results4} type={type2}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home