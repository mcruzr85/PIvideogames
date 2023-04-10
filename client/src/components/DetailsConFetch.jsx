import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

//aqui obtengo los detalles y los guardo en un estado local

const Detail = () => {
  const { id } = useParams();
 // const navigate = useNavigate();

  const [videogame, setVideogame] = useState({
    id: "",
    name: "",
    rating:"",
    released: "",
    genres: [],
    platforms: [],    
    description: "",
    background_image:"",
  });

  useEffect(() => {   
    fetch(`http://localhost:3001/videogames/${id}`)
      .then((response) => response.json())
      .then((data) => {       
        if (data) {
          setVideogame(data.copyVideogame);
        } else {
          window.alert("There is not characters with that id");
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }, [id]);

 /* function handleClick() {
    navigate("/home");
  }*/
  const descriptionHtml =`${videogame.description}`;

  return (
    <>
      <div >
        <button >Go Back</button>        
      </div>

      <div>
       <h2>Character details</h2>
       <h3>{`Id: ${videogame.id}`}</h3>
       <h3>{`Name: ${videogame.name}`}</h3>
       <h3>{`Genres: ${videogame.genres}`}</h3>
       <h3>{`Rating: ${videogame.rating}`}</h3>
       <h3>{`Released: ${videogame.released}`}</h3>
       <h3>{`platforms: ${videogame.platforms}`}</h3>
       <h3>{`website: ${videogame.website}`}</h3>
       <div>
        {parse(descriptionHtml)}
       </div>  
      </div>

      <div>
      <img src={videogame.background_image} alt="una imagen" />
      </div> 

    </>
  );
};

export default Detail;