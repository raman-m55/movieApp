import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useGetSearchQuery} from '../services/moveiApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './search.css'


function getTruncatedTitle(title, maxLength) {
    if (title) {
        return title.substring(0, maxLength);
    }
    return ''; 
}



const Search = () => {
    const {search} = useParams()
    const  {data , isLoading , error} = useGetSearchQuery(search)
    if(isLoading) return 'Loading'
    const results = data?.results

    
  return (
    <div className='container-search'>
        <div className='title-search'>
            <h1>
            Search results for {search}
            </h1>
        </div>
        <div className='container-card2'>
            {results && results?.map((item , key) => (
                <Link to={`/movie/${item?.id}/${item?.media_type}`} className='link' key={key}>
 { item?.poster_path &&  <Card sx={{ width: 100  , backgroundColor : '#0D0C11' , boxShadow : 'none'}}   >
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="160"
                            image={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography  variant="subtitle3" component="div" color='white'>
                                
                                {item?.title ? getTruncatedTitle(item?.title , 30) : getTruncatedTitle(item?.name , 30)}
                            </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Search