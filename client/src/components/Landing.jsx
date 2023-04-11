import React from 'react';
import { LandingGlobalStyle, LandingDiv } from '../styled';
import './button.css';



const Landing = () => {
  return (
    <div>
      <LandingGlobalStyle />
        <LandingDiv>
          <p style={{color:"white"}}>Welcome to the facinating world of </p>
          <p style={{color:"white", fontSize:"30px"}}> ...VIDEOGAMES</p>
          <p style={{color:"white"}}>I'm a GAMER...so</p>
        
        </LandingDiv>
        <div className="text-box">
            <a href="/home" className="btn btn-white btn-animate">I play</a>
          </div>   
     
    </div>
  )
}

export default Landing