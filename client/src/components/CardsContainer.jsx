import React, { useState, useEffect } from "react";

import * as actions from "../redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { MainContainer } from "../styled";
import Card from "./Card";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import Filter from "./Filter";



const CardsContainer = () => {
  //export const CardsContainer = ({ videogames, getAllVideogames }) => {
  let currentVideogames = [];
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

 let videogames = useSelector(state => state.videogames)
 const dispatch= useDispatch()
 


  useEffect(() => {
    let con = 2; //se conecta a la api y a la bd
    if (videogames.length === 0) {
      console.log(`entre al efect vg.len es  ${videogames.length}`);
      const serverConection = async () => {
        setLoading(true);
         //con = 0 //solo se conecta a la api
        //const obj = {con: 0, name: null}
       // await getAllVideogames();
       await  dispatch(actions.getAllVideogames(con)) ;
        // console.log(`el valor de con es ${con}`)
        setLoading(false);
      };
      serverConection();
    }

     if(videogames.length !== 0 &&  videogames.length !== 100 ){
      con = 1; //solo se conecta a la bd
      const serverConection = async () => { 
        setLoading(true);
        //const obj = {con: 1, name: null} //se conecta solo a la bd o a la bd
        await  dispatch(actions.getAllVideogames(con)) ;
        setLoading(false);
      };
      serverConection();  
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(
      `colocando e imprimiendo el valor de current page ${currentPage}`
    );
  };

  //get Current videogames
  const indexOfLastVideogame = currentPage * postPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - postPerPage;

  console.log(
    `imprimiendo desde el componente cardcontainer lo que tiene videogame al cargar =>`
  );
  console.log(videogames);
  console.log(videogames.videogames);

  if (videogames.videogames) {
    currentVideogames = videogames.videogames.slice(
      indexOfFirstVideogame,
      indexOfLastVideogame
    );
    console.log(
      "imprimiendo desde el componente cardcontainerlo que tiene currentVideogames"
    );
    console.log(currentVideogames);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>

        <Filter />
        <MainContainer>
          {videogames.videogames &&
            currentVideogames.map((e) => (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.background_image}
                rating={e.rating}
                genres={e.genres}
                origen={e.origen}
                genresDb={e.Genres}
              />
            ))}
        </MainContainer>
        </div>
      )}
      <div style={{ margin: "0 auto" }}>
        {videogames.videogames && (
          <Pagination
            postPerPage={postPerPage}
            totalPosts={videogames.videogames.length}
            paginate={paginate}
          />
        )}
      </div>
    </>
  );
};
/*
export const mapStateToProps = (state) => {
  return { videogames: state.videogames };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllVideogames: () => dispatch(actions.getAllVideogames()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
*/

export default CardsContainer;