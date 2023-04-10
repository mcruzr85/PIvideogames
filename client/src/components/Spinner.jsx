import React from 'react';
import { SpinnerContainer } from "../styled";
import spinner from '../assets/spinner.gif';

//style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}
//codigo solo para el img spinner

const Spinner = () => {
  return (
    
    <SpinnerContainer>
        <img src={spinner} alt='spinner'/>
        <h1>Loading data...</h1>
    </SpinnerContainer>   
       
    

  )
}

export default Spinner