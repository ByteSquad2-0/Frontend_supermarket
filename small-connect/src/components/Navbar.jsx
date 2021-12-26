import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, TextField } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function Navbar() {
  return (
    <header className='px-5 py-2 flex items-center gap-x-5 shadow top-0 sticky bg-white text-indigo-400'>
      <Link to='/' className='text-indigo-400 text-4xl'>Small Connect</Link>
      <div className='flex-1'></div>
      <Search />
      <Link to='/cart'>
        <IconButton aria-label="delete" size="large">
          <ShoppingCartRoundedIcon color='primary' />
        </IconButton>
      </Link>
      <Button
        variant="contained"
        classes='text-white'
      >
        Sign In
      </Button>
    </header>
  );
}

function Search() {
  return (
    <Fragment>
      <TextField
        size='small'
        placeholder='Search here...'
      />
    </Fragment>
  );
}

export default Navbar;
