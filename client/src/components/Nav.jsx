import React from 'react';

import { StyledLink } from './StyledLink';
import {NavBar} from '../styled';
import Search from './Search';


const Nav = () => {
  return (
    <NavBar>
      
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/form">Create a videogame</StyledLink>
      <Search />
      
    </NavBar>
  )
}

export default Nav