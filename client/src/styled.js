import styled, { createGlobalStyle } from 'styled-components'; 

import background from "./assets/bg2.jpg"

export const LandingGlobalStyle = createGlobalStyle`
  body{
    margin: 0 auto;    
    font-size: 1.6rem; 
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    min-height: 100vh; 
    display:flex;
    flex-direction:column;
  }
`;


/**
 * You can do with dinamic props, like that

const Content = styled.div`
    background-image: url(${props => props.img});
`;
<Content img={ImagePath} />
 */

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0 auto;        
    background: #455062;
    min-height: 100vh; 
  }
`;

//component Card
export const Relative = styled.div`
  background-color: #3E4755;
  width: 250px;
  height: 150px; 
  margin:1rem 2rem;
  border-radius:6px;
  box-shadow: 0 4px 8px 0 rgba(192, 192, 192, 0.4), 0 6px 20px 0 rgba(192, 192, 192, 0.19);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .2rem;  
  
  &:hover{
    cursor:pointer;
  }
`; 
export const Foto = styled.img`
    width: 110px;
    height: 125px;
    margin: auto 1rem;   
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;    
export const Info = styled.div` 
  display: flex;
  flex-direction: column;
  padding: .7rem;
  position:relative;     
`;
export const TextoName = styled.p`
font-weight:700;
 color: white;
 font-size: 1.2rem;
 line-height: 90%;
 margin:0;
 margin-top:1rem;

`;// z-index: 0;

export const DivName = styled.div`
  width: 85px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TextoCard = styled.p`
font-weight:500;
 color: white;
 font-size: 1.1rem;
 line-height: 90%;
 margin:0;
 margin-top:1rem;
`;

export const DetailBoton = styled.button`
background: white;
cursor: pointer;
font-size: 12px;
border: 1.5px solid #D5E1E6;
border-radius: 5px;
transition: all .3s ease;
position:absolute;
top:12rem;
left:1rem;
width:80px;
height:19px;

&:hover{
  background: #D5E1E6;
}
`;

//componente de Landing

export const LandingBoton = styled.button`
border-radius: 100px; 
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  top:30rem;
  left:65rem;
 
  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;
`;
export const LandingDiv = styled.div`    
    display:flex;
    flex-direction:column;
    margin-top:15rem;
    margin-left:75rem;  
`;


//Componente de Detalles de la card seleccionada  #9CCFF0;
export const ScrollDiv = styled.div`
  width: 409px;
  height: 250px;
  overflow-y: scroll;  
  overflow-wrap: break-word;
  margin-bottom: 1rem;
  `;

export const DetailContainer = styled.div`
  display: inline-block;
`; 

export const CardDetail = styled.div`
  background-color: #3E4755;
  color: white;
  line-height: 105%;
  width: min(80%, 800px);

  height: 550px; 

  border-radius:6px;
  box-shadow: 0 4px 8px 0 rgba(192, 192, 192, 0.4), 0 6px 20px 0 rgba(192, 192, 192, 0.19);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;    
  
  margin: 1rem auto; 
  padding:2rem;
`; // width: min(80%, 800px);

export const FotoDetail = styled.img`
    width: 100%;
    height: 400px;
    margin: 0 auto;   
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;   

  //navbar
  /**
   * margin-top: 0;
margin-rigth: 2rem ;
padding: 26px 20px;

align-items: center;
   */
  export const NavBar = styled.div`
  width: 100%;
  height: 60px;
  padding:1.5rem;
  align-itens: center;
  font-size: 20px;  
  background-color: #05h;
  border: 2px solid #09f;
  display: flex;
  justify-content: space-around;  
  gap: 2rem;  
`;
//cards container
export const MainContainer = styled.div` 
width: min(80%, 800px);  
display: grid;
grid-template-columns:  repeat(3, 20px 1fr); 
column-gap: 5rem;
row-gap:2rem;
margin: 2rem auto;
`; 


//spinner
export const SpinnerContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


//search
export const SearchBoton = styled.button`
background: white;
cursor: pointer;
font-size: 12px;
border: 1.5px solid #D5E1E6;
border-radius: 5px;
transition: all .3s ease;
margin-left:.3rem;

width:80px;
height:19px;

&:hover{
  background: #D5E1E6;
}
`;