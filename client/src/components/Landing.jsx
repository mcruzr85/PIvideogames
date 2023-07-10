import React from 'react';
import { LandingGlobalStyle } from '../styles/global';
import { LandingContainer, LandingP, LandingImgDiv, LandingLettersDiv, LandingButton } from '../styled';
import './button.css';
import imageBack from '../assets/games1.jpg'



const Landing = () => {
  return (
    <div>
       <LandingGlobalStyle />
     
        <LandingContainer>

          <LandingLettersDiv>
            <LandingP>Welcome to the facinating world of </LandingP>
            <LandingP> ...VIDEOGAMES</LandingP>
            <LandingP>I'm a GAMER...so</LandingP>            
          </LandingLettersDiv>
       
          <LandingImgDiv>
            <img style={{width:"100%"}} src={imageBack} alt='psp'/>
          </LandingImgDiv>
        
            <LandingButton href="/home" className="btn btn-white btn-animate">I play</LandingButton>
         
        
        </LandingContainer>
        
     
    </div>
  )
}

export default Landing