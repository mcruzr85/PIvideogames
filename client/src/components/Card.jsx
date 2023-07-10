import React from "react";
import { Link } from "react-router-dom";
import {
  Info,
  Foto,
  Relative,
  TextoName,
  DivName,
  TextoCard,
  CardBoton,
} from "../styled";

const Card = ({ id, name, image, genres, rating, origen }) => {
  return (
    <>
      <Relative>
        <Foto src={image} />

        <Info>
          <DivName>
            <TextoName>{name}</TextoName>
          </DivName>
          <TextoCard>{`Rating: ${rating}`}</TextoCard>

          <TextoCard>{genres}</TextoCard>

          <Link to={`/details/${id}`}>
            <CardBoton>
              <svg
                viewBox="0 0 24 24"
                fill="#231B4A"
                height="1em"
                width="1.5em"
              >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z" />
                <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z" />
              </svg>
              Details
            </CardBoton>
          </Link>
        </Info>
      </Relative>
      <br />
    </>
  );
};

export default Card;

/**import React from "react";
import { Link } from "react-router-dom";
import {
  Info,
  Foto,
  Relative,
  TextoName,
  DivName,
  TextoCard,
  DetailBoton,
} from "../styled";

const Card = ({ id, name, image, genres, rating, origen , genresDb}) => {
  let genresDatabase = "valorInicial";
  if(genresDb !== undefined){
     genresDatabase = genresDb.map(g => g.name).join('-');
  }
  return (
    <>
      <Relative>
        <Foto src={image} />

        <Info>          
          <DivName>
            <TextoName>{name}</TextoName>
          </DivName>
          <TextoCard>{`Rating: ${rating}`}</TextoCard>
          {origen === "db" ? 
          (<TextoCard>{genresDatabase}</TextoCard>) : 
          ( <TextoCard>{genres}</TextoCard>)}

         
          <Link to={`/details/${id}`}>
            <DetailBoton>
              <svg
                viewBox="0 0 24 24"
                fill="#231B4A"
                height="1em"
                width="1.5em"
              >
                <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z" />
                <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z" />
              </svg>
              Details
            </DetailBoton>
          </Link>
        </Info>
      </Relative>
      <br />
    </>
  );
};

export default Card;
 */
