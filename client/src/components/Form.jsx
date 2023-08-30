import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import {
  DetailContainer,
  Textarea,
  Select,
  Div,
  CardDetail,
  FotoForm,
  MainBoton,
  Input,
} from "../styled";

const arrayPlatformValues = [
  "Playstation 5",
  "Playstation 4",
  "Playstation 3",
  "Xbox series S/X",
  "Xbox 360",
  "PC",
];

const Form = () => {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  //const [vgGenres, setVgGenres] = useState([]);
  const [videogame, setVideogame] = useState({
    name: " ",
    description: " ",
    released: " ",
    background_image: " ",
    rating: 0,
    platforms: "",
    genres: "",
  });

  const [error, setError] = useState({
    name: " ",
    description: " ",
    released: " ",
    background_image: " ",
    rating: " ",
    platforms: " ",
    genres: " ",
  });

  function resetFields() {
    setVideogame({
      name: " ",
      description: " ",
      released: " ",
      background_image: " ",
      rating: " ",
      genres: "",
      platforms: "",
    });
    setError({
      name: " ",
      description: " ",
      released: " ",
      background_image: " ",
      rating: " ",
      genres: " ",
      platforms: " ",
    });
  }

  function validate(obj) {
    let myError = {};

    if (!obj.name) myError.name = "Please type a name";
    if (!obj.description) myError.description = "Please type a description";
    if (!obj.released) myError.released = "Please choose a date";
    if (!obj.background_image) myError.background_image = "Please add an image";
    // if (!obj.platforms) myError.platforms = "Please select at least a platform";
    // if (obj.genres.length !== 0 ) myError.genres = "Please select at least a genre";
    if (obj.description.length >= 200)
      myError.description =
        "The description should be shorter than 200 characters";
    if (obj.rating > 5 || obj.rating < 0) myError.rating = " 0 < Rating < 5";

    return myError;
  }

  const handleVideogame = (e) => {
    setVideogame({ ...videogame, [e.target.name]: e.target.value });
    setError(validate({ ...videogame, [e.target.name]: e.target.value }));
  };

  /* const  addGenre= (e)=> {
    if(!videogame.genres.includes(e.target.value)){
      setVideogame({...videogame, genres: [...videogame.genres, e.target.value]} )
      //setError( validate({...videogame,  [e.target.name] : e.target.value }))
      setError( validate({...videogame, genres: [...videogame.genres, e.target.value]}))
    }      
  }*/
  /*const  addGenre2= (e)=> {
    let genreArray=[]

    if(!videogame.genres.includes(e.target.value)){ //si el genero no esta en el array  
      genreArray.push(e.target.value);    
      setVideogame({...videogame,  genres:[...videogame.genres, e.target.value]} )
      setError( validate({...videogame, genres: [...videogame.genres, e.target.value]}))
    }  
    else{//si el genero ya esta en el array y le di click por 2da vez
      genreArray = videogame.genres.filter(gen => gen !== e.target.value)
      setVideogame({...videogame, genres: genreArray} )
      setError( validate({...videogame, genres:genreArray}))
    }    
  }*/
  const handleSelectValues = (e) => {
    if (e.target.value !== "") {
      let aux = [];

      if (!videogame[e.target.name].includes(e.target.value)) {
        //si el genero no esta en el array
        // genreArray.push(e.target.value);
        setVideogame({
          ...videogame,
          [e.target.name]: [...videogame[e.target.name], e.target.value],
        });
        setError(
          validate({
            ...videogame,
            [e.target.name]: [...videogame[e.target.name], e.target.value],
          })
        );
      } else {
        //si el genero ya esta en el array y le di click por 2da vez
        aux = videogame[e.target.name].filter(
          (elem) => elem !== e.target.value
        );
        setVideogame({ ...videogame, [e.target.name]: aux });
        setError(validate({ ...videogame, [e.target.name]: aux }));
      }
    }
  };

  /* const addPlatforms = (e) =>{
    let selection = []
    const options = e.target.options;
    console.log(options);
    const long = options.length;
    for(let i = 0; i < long; i++){
       if(options[i].selected){
        selection.push(options[i].value); //aqui tengo un array con los values de los
       }      
    }
//const stringPlatforms = selection.join('-')
    setVideogame({...videogame, platforms: selection})

  }*/

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(`estoy en Form insertando el vg`);
    // console.log(videogame);
    const hayErrors = validate({
      ...videogame,
      [e.target.name]: e.target.value,
    }); //es un objeto
    const arrayError = Object.values(hayErrors); //array con los valores del objeto

    console.log(arrayError);
    console.log(arrayError.length);

    if (
      !arrayError.length &&
      videogame.name !== " " &&
      videogame.description !== " " &&
      videogame.rating !== " " &&
      videogame.released !== " " &&
      videogame.platforms !== " " &&
      videogame.background_image !== " " &&
      videogame.genres.length
    ) {
      videogame.origen = "db"; //agrego el origen de este videojuego
      videogame.platforms = videogame.platforms.join("-");

      await dispatch(actions.addVideogame(videogame));
      resetFields(); //pongo los campos en blanco
      alert("Videogame created with success!");
    } else {
      return alert("Please check the information");
    }
  }

  return (
    <>
      <CardDetail>
        <div>
          <form onSubmit={handleSubmit}>
            <legend>Create a videogame!!</legend>

            <Div>
              <label htmlFor="name">Name:</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={videogame.name}
                onChange={handleVideogame}
              />
              {error.name && <p>{error.name}</p>}
            </Div>

            <Div>
              <label>Description:</label>
              <Textarea
                id="description"
                name="description"
                rows={2}
                cols={25}
                value={videogame.description}
                onChange={handleVideogame}
              />
              {error.description && <p>{error.description}</p>}
            </Div>

            <Div>
              <label htmlFor="background_image">Image:</label>
              <Input
                type="text"
                id="background_image"
                name="background_image"
                value={videogame.background_image}
                onChange={handleVideogame}
              />
              {error.background_image && <p>{error.background_image}</p>}
            </Div>

            <Div>
              <label>Platforms:</label>
              <Select
                id="platforms"
                name="platforms"
                value={videogame.platforms}
                onChange={handleSelectValues}
              >
                <option value="">-Platforms-</option>
                {arrayPlatformValues.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </Select>

              {error.platforms && <p>{error.platforms}</p>}
            </Div>

            <Div>
              <label>Genres:</label>
              <Select
                name="genres"
                id="genres"
                value={videogame.genres}
                onChange={handleSelectValues}
              >
                <option value="">-Genres-</option>
                {genres &&
                  genres.map((g) => {
                    return (
                      <option key={g.name} value={g.name}>
                        {g.name}
                      </option>
                    );
                  })}
              </Select>
            </Div>

            <Div>
              <label>Released:</label>
              <Input
                type="date"
                id="released"
                name="released"
                value={videogame.released}
                onChange={handleVideogame}
              />
              {error.released && <p>{error.released}</p>}
            </Div>

            <Div>
              <label>Rating:</label>
              <Input
                type="number"
                name="rating"
                id="rating"
                min="0"
                step="0.1"
                value={videogame.rating}
                onChange={handleVideogame}
              />
              {error.rating && <p>{error.rating}</p>}
            </Div>

            <div>
              <MainBoton>Create</MainBoton>
              {/* <button>Create</button>*/}
            </div>
          </form>
        </div>
        <div>
          <FotoForm src={videogame.background_image} alt={videogame.name} />
        </div>
        {videogame.genres.length ? (
          <div>
            <h3>Selected genres:</h3>
            {videogame.genres.map((element) => {
              return (
                <label
                  key={element}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "cornflowerblue",
                    padding: ".5rem",
                    borderRadius: "30%",
                  }}
                >
                  {element}
                </label>
              );
            })}
          </div>
        ) : null}
        <br />

        {videogame.platforms.length ? (
          <div>
            <h3>Selected platforms:</h3>
            {videogame.platforms.map((element) => {
              return (
                <label
                  key={element}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "cornflowerblue",
                    padding: ".5rem",
                    borderRadius: "30%",
                  }}
                >
                  {element}
                </label>
              );
            })}
          </div>
        ) : null}
      </CardDetail>
    </>
  );
};

export default Form;
