import React, { useEffect } from "react";
//import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";

async function getGenresOk() {
  try {
    let response = await fetch("http://localhost:3001/genresdb");
    const data = await response.json();
    console.log("el valor de data.genres.length en getGenresOk es");
    console.log(data.genres.length);
    if (data.genres.length !== 0) {
      return true;
    } else return false;
  } catch (error) {
    console.log(error.message);
  }
}

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const connection = async () => {
      console.log("ejecutando efect1 get genres desde bd");

      const aux = await getGenresOk();
      console.log("el valor de aux es ");
      console.log(aux);
      if (aux) { //si es true, tengo los generos ya en la bd
        await dispatch(actions.getGenres("db")); //aqui pongo el en state lo que hay en la bd
      } else {
        await dispatch(actions.getGenres("api"));//obtengo los genres de la api y los guardo en la bg
      }
    };
    connection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const genres = useSelector((state) => state.genres);

  function handleDispatch(e) {
    const { name, value } = e.target;
    if (name === "order") {
      return dispatch(actions.orderCards(value));
    }
    if (name === "filterGenre") {
      return dispatch( actions.filterGenre(value) );
    }
    if (name === "filterOrigen") {
      return dispatch( actions.filterOrigen(value) );
    }
  }

  return (
    <>
      <div>
        <select name="filterOrigen" onChange={handleDispatch}>
          <option value="title">-Created-</option>
          <option value="all">All</option>
          <option value="api">API</option>
          <option value="db">DB</option>
        </select>

        <select name="filterGenre" id="filterGenre" onChange={handleDispatch}>
          <option value="title">-Genres-</option>
          {genres.genres &&
            genres.genres.map((g) => {
              return (
                <option key={g.name} value={g.name}>
                  {g.name}
                </option>
              );
            })}
        </select>
        <select name="orderRN" onChange={handleDispatch}>
          <option value="title">-Sort by-</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>

        <select name="orderAD" onChange={handleDispatch} hidden={true}>
          <option value="title">-Sort by-</option>
          <option value="asc">Asc</option>
          <option value="des">Des</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
