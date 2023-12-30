import React, { useState } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Link, useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





const Navbar = () => {
  const [search , setSearch] = useState('')
  const navigate = useNavigate()

const handleClick = () => {
  navigate(`/results/${search}`)
  console.log(search)
}

const handleChange = (event) => {
  setSearch(event.target.value)
}

  return (
    <div className='navbar'>
      <div className='items-navbar'>
        <div className='icon-title'>
          <Link to='/' className='link zoom'>
          <h2 className='titleh1'>Movie</h2>
          </Link>
        </div>

      </div>

      <div className='search-navbar'>
          <Search style={{color : 'white'}}  >

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              
            />
          </Search>
          <SearchIcon fontSize='large' style={{color : '#E50914'}} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Navbar