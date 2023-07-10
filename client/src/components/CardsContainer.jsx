import React, { useState, useEffect } from "react";

import * as actions from "../redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { MainContainer , Main} from "../styled";
import Card from "./Card";
import Spinner from "./Spinner";
import Pagination from "./Pagination";
import Filter from "./Filter";



const CardsContainer = () => {
  //export const CardsContainer = ({ videogames, getAllVideogames }) => {
  let currentVideogames = [];
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postPerPage, setPostPerPage] = useState(15);

 let videogames = useSelector(state => state.videogames)
 const dispatch= useDispatch()
 
  useEffect(() => {
    let con = 2; //se conecta a la api y a la bd
    if (videogames.length === 0) {
      console.log(`entre al efect vg.len es  ${videogames.length}`);
      const serverConection = async () => {
      setLoading(true);       
      await  dispatch(actions.getAllVideogames(con, null)) ;       
      setLoading(false);
      };
      serverConection();
    }
  
  }, [dispatch, videogames.length]); 

    //get Current videogames
  const indexOfLastVideogame = currentPage * postPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - postPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(`colocando e imprimiendo el valor de current page ${currentPage}`);
  };



  console.log(
    `imprimiendo desde el componente cardcontainer lo que tiene videogame al cargar =>`
  );
  console.log(videogames);
  

  if (videogames.length) {
    currentVideogames = videogames.slice(
      indexOfFirstVideogame,
      indexOfLastVideogame
    );
    
    console.log("imprimiendo desde el componente cardcontainerlo que tiene currentVideogames" );
    console.log(currentVideogames);
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div style={{ margin: "0 auto" }}>
            {videogames.length && (
             <Pagination
              postPerPage={postPerPage}
              totalPosts={videogames.length}
              paginate={paginate}
             />
             )}
          </div>
          <div>       

        <Filter />
        
        <MainContainer>
          {currentVideogames &&
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

        </div>)}
      
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