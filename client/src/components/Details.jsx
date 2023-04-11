import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import parse from "html-react-parser";
import Spinner from "./Spinner";

import { DetailContainer, CardDetail, FotoDetail, ScrollDiv } from "../styled";

function isFromDatabase(id, array) {
  const vgToDetail = array.filter(e => e.id == id);  
  console.log(vgToDetail);         
  const isDB = vgToDetail.filter(e => e.origen === "db");
  if (isDB.length > 0) {return true;}
  else return false;
}

//aqui detalles esta en un estado global usando redux

const Details = () => {

  //let details = {}; <h3>{`Genres: ${details.genres}`}</h3>
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {
    //use effect par aobtener los detalles del videogame dado su id
    const connection = async () => {
      let creado = false;
      setLoading(true);
      const vgDb = await isFromDatabase(id, videogames);
      console.log(`hay creado con ese id? ${id}`);
      console.log(vgDb);
      if(vgDb) {
        setVgCreated(true);
        creado = true;       
      } 
      await dispatch(actions.getDetails(id, creado));         
      setLoading(false);
    };
    connection();
    return () => dispatch(actions.resetDetails());
 
  }, [dispatch, id, videogames]);

  const [loading, setLoading] = useState(false);
  const [vgCreated, setVgCreated] = useState(false); //lo inicializo como que es de la api

  const details = useSelector((state) => state.videogameDetails); 
  var descriptionHtml = '';
  if(!vgCreated){
    descriptionHtml = `${details.description}`;
  }
   //para el scroll del description

  function handleClick() {
    navigate(-1)
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <DetailContainer>
          <CardDetail>
            <div>
              <h3>{`Id: ${details.id}`}</h3>
              <h2> {details.name}</h2>
              
              <h3>{`Rating: ${details.rating}`}</h3>
              <h3>{`Released: ${details.released}`}</h3>
              <h3>{`Platforms: ${details.platforms}`}</h3>
              <h3>{`Web site: ${details.website}`}</h3>
              
              {vgCreated ? 
              (<ScrollDiv>{details.description}</ScrollDiv>) : 
              (<ScrollDiv>{parse(descriptionHtml)}</ScrollDiv>)}
              
            </div>

            <div>
              <FotoDetail src={details.background_image} alt="una imagen" />
            </div>

            <div>
              <button onClick={handleClick}>
                <svg
                  baseProfile="tiny"
                  viewBox="0 0 24 24"
                  fill="#231B4A"
                  height="1em"
                  width="1.5em"
                >
                  <path d="M12 9.059V6.5a1.001 1.001 0 00-1.707-.708L4 12l6.293 6.207a.997.997 0 001.414 0A.999.999 0 0012 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z" />
                </svg>
                Go Back
              </button>
            </div>
          </CardDetail>
        </DetailContainer>
      )}
    </>
  );
};

export default Details;
