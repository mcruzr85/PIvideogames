import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }  
      
  body {  
      margin: 0 auto;  
      background: #001d3d;            
      min-height: 100vh;       
      font-family: 'Chilanka', cursive;    
    }

`;

export const LandingGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
         
      
  body {  
      margin: 0 auto;  
      background: #000;               
      min-height: 100vh;
      
      font-family: 'Chilanka', cursive;       
    } 

`;

export default Global;
