const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame } = require("../db");

const { Router } = require("express");
const router = Router();
//https://api.rawg.io/api/games?key=928a106257314462a3a43bf37033df35  aqui no hay description

/**📍 GET | /videogames
Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información. OJO del api y de la bd*/

//si hay query

/**
 * 📍 GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos

//https://api.rawg.io/api/games?search=${name}&key=928a106257314462a3a43bf37033df35
 */
const getVideogamesFromApi = async (name) => {
  try {
    let apiData = [];
    let arrayApi = [];
    let videogamesApi = [];
    let cant = 0;
    
    if (name) {
      apiData = await axios(
        `https://api.rawg.io/api/games?search=${name}&key=928a106257314462a3a43bf37033df35`
      );
      arrayApi = apiData.data.results;      
     
      if (arrayApi.length) {
        videogamesApi = arrayApi.map((vg) => {
          return {
            id: vg.id,
            name: vg.name,
            released: vg.released,
            rating: vg.rating,
            background_image: vg.background_image,
          };
        });
        
      }else {
        return [];
     }
      
    }else{

        //si no hay name traigo 100
   //let arrayApi = [];
    for (let i = 1; i < 6; i++) {
        apiData = await axios(
          `https://api.rawg.io/api/games?key=928a106257314462a3a43bf37033df35&page=${i}`
        );
        arrayApi.push(apiData);
      }
     
      if (arrayApi.length) {
      arrayApi = await Promise.all(arrayApi);

      videogamesApi = arrayApi.map((response) =>
        response.data.results.map((vg) => {
          return {
            id: vg.id,
            name: vg.name,
            released: vg.released,
            rating: vg.rating,
            description: vg.description,
            background_image: vg.background_image,
          };
        })
      );
      videogamesApi = videogamesApi.flat(); 
      //esto es pq era un array de arrays y con esto se junta en un solo []

    }  else{
        return [];
    }  
  }
  
  cant = videogamesApi.length;  
  return videogamesApi;

} catch (error) {
    return { error: error.message };
  }
};


const getVideogamesFromDb = async (name) => {
  try {
    if (!name) {
        const vgsBd = await Videogame.findAll();       
        return vgsBd; 
      
    }else{
        const { count, rows } = await Videogame.findAndCountAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
          });
          return rows;      
    }
     
  } catch (error) {
    return { error: error.message };
  }
};



router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    let vgsApi = await getVideogamesFromApi(name);
    let vgsDb = await getVideogamesFromDb(name);
    //const vgsBd = await Videogame.findAll();
    vgsApi = [...vgsDb, ...vgsApi]; //agrego los vg de la bd

      if (vgsApi.length) {
       console.log(`cant total ${vgsApi.length}`)
         /*console.log(`cant vgsApi ${vgsDb.length}`)
        console.log(`cant vgsBD directo ${vgsBd.length}`)*/
        return res.status(200).json({vgsApi });
      } else {
        return res.status(400).json({ Message: "No existen videogames con ese nombre" });
      }
    }
   catch (error) {
    res.status(400).json({ Error: error.message }); 
  }
});

/*📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/
router.post("/", async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      released,
      rating,
      background_image,
      platforms,
    } = req.body;
    if (
      !id |
      !name |
      !description |
      !released |
      !rating |
      !background_image |
      !platforms
    ) {
      return res.status(400).json({ Message: "Datos incompletos" });
    } else {
      let newVideogamedd = await Videogame.create({
        id,
        name,
        description,
        released,
        rating,
        background_image,
        platforms,
      });

      return res.status(201).json(newVideogamedd);
    }
  } catch (error) {
    return res.status(400).json({ Error: error.message });
  }
});

module.exports = router;
