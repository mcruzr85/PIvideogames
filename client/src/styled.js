import styled from "styled-components";

//import background from "./assets/bg2.jpg"

/**
 * You can do with dinamic props, like that

const Content = styled.div`
    background-image: url(${props => props.img});
`;
<Content img={ImagePath} />
//width: min(80%, 800px);  

 */
//cards container

export const MainContainer = styled.div`
  width: min(90%, 120rem);
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 550px) {
    display: grid;
    grid-template-columns: repeat(2, 251px 20px);
    place-content: center;
    margin-right: 20px;
    column-gap: 0.5rem;
  }

  @media (min-width: 1204px) {
    width: min(90%, 120rem);
    grid-template-columns: repeat(3, 251px 20px);
  }
`;

//component Card
export const Relative = styled.div`
  background-color: #001d3d;
  width: 260px;
  height: 160px;
  margin: 1rem auto;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(192, 192, 192, 0.4),
    0 6px 20px 0 rgba(192, 192, 192, 0.19);
  display: grid;
  grid-template-columns: 1fr 1fr;

  &:hover {
    cursor: pointer;
  }
`;
export const Foto = styled.img`
  width: 115px;
  height: 130px;
  margin: auto 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  position: relative;
`;
export const TextoName = styled.p`
  font-weight: 700;
  color: white;
  font-size: 15px;
  line-height: 90%;
  margin: 0;
  margin-top: 0.7rem;
`; // z-index: 0;

export const DivName = styled.div`
  width: 85px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TextoCard = styled.p`
  font-weight: 500;
  color: white;
  font-size: 13px;
  line-height: 90%;
  margin: 0;
  margin-top: 1rem;
`;

export const Boton = styled.button`
  background: #d5e1e6;
  cursor: pointer;
  font-size: 12px;
  border: 1.5px solid #d5e1e6;
  border-radius: 5px;
  transition: all 0.3s ease;

  margin-left: 0.3rem;

  width: 80px;
  height: 19px;

  &:hover {
    background: #fad643;
  }
`;

export const CardBoton = styled(Boton)`
  margin-left: 0;
  position: absolute;
  top: 7.9rem;
  left: 0.4rem;
`;
//componente Form para crear un videogame
export const Div = styled.div`
  padding: 5px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const MainBoton = styled(Boton)`
  background: #d5e254;
  font-size: 14px;
  font-weight: 700;
  padding: 2px;
  margin-top: 5px;

  &:hover {
    background: #fff;
  }
`;
export const Input = styled.input`
  border-radius: 5px;
  border: solid 1px cadetblue;
  padding: 5px;
  font-weight: 700;
  background: #c7c7c7;
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  border: solid 1px cadetblue;
  padding: 5px;
  font-weight: 700;
  background: #c7c7c7;
  width: 200px;
  height: 100px;
  resize: none;
`;
export const Select = styled.select`
  border-radius: 5px;
  border: solid 1px cadetblue;
  padding: 5px;
  font-weight: 700;
  background: #c7c7c7;
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
  top: 30rem;
  left: 65rem;

  outline: none;
  border-radius: 5px;
  border: 2px solid #57cc99;
  background: #57cc99;
`;
export const LandingContainer = styled.div`
  width: min(80%, 120rem);
  margin: 1rem auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 1rem auto;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;
export const LandingImgDiv = styled.div`
  margin-top: 3rem;

  @media (min-width: 768px) {
    width: min(80%, 100rem);
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: min(80%, 120rem);
    padding-top: 2rem;
  }
`;

export const LandingLettersDiv = styled.div`
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

export const LandingButton = styled.a`
  top: 70%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1024px) {
    top: 50%;
    left: 70%;
  }
`;

export const LandingP = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;
//FILTER
export const FilterDiv = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

//Componente de Detalles de la card seleccionada  #9CCFF0;
export const ScrollDiv = styled.div`
  width: 409px;
  height: 234px;
  overflow-y: scroll;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const DetailContainer = styled.div`
  display: inline-block;
`;

export const Letter = styled.h3`
  padding-bottom: 0.5rem;
`;

export const CardDetail = styled.div`
  background-color: #001d3d;
  color: #fcf6bd;
  line-height: 105%;
  width: min(80%, 800px);

  height: 430px;

  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(192, 192, 192, 0.4),
    0 6px 20px 0 rgba(192, 192, 192, 0.19);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;

  margin: 1rem auto;
  padding: 1.5rem;
`; // width: min(80%, 800px);
//FORM
export const FotoForm = styled.img`
  width: 210px;
  height: 285px;
  margin: auto 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

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
  padding: 1.5rem;
  align-itens: center;
  font-size: 20px;
  background-color: #05h;
  border: 2px solid #09f;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

//spinner
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
