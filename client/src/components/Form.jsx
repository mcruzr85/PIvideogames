import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../redux/actions';
import { DetailContainer, CardDetail} from "../styled";




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
    platforms: " ",
    genres: [],
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
  
  function resetFields(){
    setVideogame({
      name: " ",
      description: " ",
      released: " ",
      background_image: " ",
      rating: " ",
      genres: [],
      platforms: " ",
    });
    setError({
      name: " ",
      description: " ",
      released: " ",
      background_image: " ",
      rating: " ",
      genres: " ",
      platforms: " ",
    })
  } ;
  

  function validate(obj) {
    let myError = {}; 
     
      if (!obj.name) myError.name = "Please type a name";
      if (!obj.description) myError.description = "Please type a description";
      if (!obj.released) myError.released = "Please choose a date";
      if (!obj.background_image) myError.background_image = "Please add an image";
      if (!obj.platforms) myError.platforms = "Please select at least a platform";
     // if (obj.genres.length !== 0 ) myError.genres = "Please select at least a genre";
      if (obj.description.length >= 35) myError.description = "The description should be shorter than 35 characters";
      if (obj.rating > 5 || obj.rating < 0) myError.rating = " 0 < Rating < 5";
      
      return myError;
    }
  
    function handleVideogame(e){  
        
        setVideogame({ ...videogame,  [e.target.name] : e.target.value }); 
        setError( validate({...videogame,  [e.target.name] : e.target.value }))
        console.log('imprimo state videogame');
        console.log(videogame)
        console.log('imprimo state error');
        console.log(error);        
    };
  

  function addGenre(e) {
    if(!videogame.genres.includes(e.target.value)){
      setVideogame({...videogame, genres: [...videogame.genres, e.target.value]} )
      //setError( validate({...videogame,  [e.target.name] : e.target.value }))
      setError( validate({...videogame, genres: [...videogame.genres, e.target.value]}))
    }      
  }

  async function handleSubmit(e) {  
    e.preventDefault();

    console.log(`estoy en Form insertando el vg`);
    console.log(videogame);

    const hayErrors = validate({ ...videogame, [e.target.name]: e.target.value })//es un objeto
    const arrayError = Object.values(hayErrors)//array con los valores del objeto

    console.log(arrayError);
    console.log(arrayError.length)


    if(!arrayError.length && videogame.name !== " "  && videogame.description !== " "
    && videogame.rating !== " " && videogame.released !== " " && videogame.platforms !== " "
    && videogame.background_image !== " " && videogame.genres.length){

      videogame.origen = "db";

      await dispatch( actions.addVideogame(videogame));      
      resetFields(); //pongo los campos en blanco
      alert("Videogame created with success!")
    }
    else{
     return alert("Please check the information");
    }
  }



  return (
    <>
    <DetailContainer>
      <CardDetail>

      <div>
      <form onSubmit={handleSubmit}>
        <legend>Create a videogame!!</legend>

        <div>
          <label htmlFor="name">
            Name:
          <input
            type="text"
            id="name"
            name="name"
            value={videogame.name}
            onChange={handleVideogame}
          />
          </label>
          {error.name && <p>{error.name}</p>}
        </div>

        <div>
          <label>
            Description:
          <textarea
            id="description"
            name="description" rows={2} cols={25}
            value={videogame.description}
            onChange={handleVideogame}
          />
          </label>
          {error.description && <p>{error.description}</p>}          
        </div>

        <div>
          <label htmlFor="background_image">Image:
          <input
            type="text"
            id="background_image"
            name="background_image"
            value={videogame.background_image}
            onChange={handleVideogame}
          />
          </label>
          {error.background_image && <p>{error.background_image}</p>}
        </div>
    
        <div>
          <label>
            Platforms:
          <select
            id="platforms"
            name="platforms"
            value={videogame.platforms}
            
            onChange={handleVideogame}
          ><option value="all">-Platforms-</option>
            <option value="playstation5">Playstation 5</option>
            <option value="playstation4">Playstation 4</option>
            <option value="playstation3">Playstation 3</option>
            <option value="xboxseriess/x">Xbox series S/X</option>
            <option value="xbox360">Xbox 360</option>
            <option value="pc">PC</option>            
        </select>   
        </label>
        {error.platforms && <p>{error.platforms}</p>}
        </div>


        <div>
          <label>
            Genres:
          <select name="genres" multiple={true} id="genres" onChange={(e)=>addGenre(e)}>
            <option value="all">-Genres-</option>
              {genres.genres && genres.genres.map((g) => {
              return <option key={g.name} value={g.name}>{g.name}</option>;
                 })}
          </select>
          </label>
         </div>

        <div>
          <label>Released:
          <input
            type="date"
            id="released"
            name="released"
            value={videogame.released}
            onChange={handleVideogame}
          />
          </label>
          {error.released && <p>{error.released}</p>}
        </div>

        <div>
          <label>Rating:
          <input
            type="number" 
            name="rating"
            id="rating" 
            min="0" 
            step="0.1"                       
            value={videogame.rating}
            onChange={handleVideogame}
          />
          </label>
          {error.rating && <p>{error.rating}</p>}
        </div>

        <div>
          <button>Create</button>
        </div>
      </form>
    </div>

      </CardDetail>
      </DetailContainer>
    </>
    
  );
};

export default Form;
