/*📍 GET | /videogames/:idVideogame
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.*/
//https://api.rawg.io/api/games/${idVideogame}?key=928a106257314462a3a43bf37033df35

const axios = require('axios');
const { Videogame } = require('../db');
const {Router} = require('express');
const router = Router();

const isNumeric = n => !!Number(n);

router.get("/:idVideogame", async(req,res)=>{
   try{
    const { idVideogame } = req.params;
    
    if(idVideogame){
        if(isNumeric(idVideogame)){
         let apiData 
         apiData = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=928a106257314462a3a43bf37033df35`)
             
             const videogame = apiData.data;
             let copyVideogame = {};
             //hago esto para tomar solo las propiedades que me interesan de la data
              copyVideogame.id = videogame.id;
              copyVideogame.name = videogame.name;
              copyVideogame.rating = videogame.rating;
              copyVideogame.released = videogame.released;
              copyVideogame.genres = videogame.genres.map(e => e.name);
              copyVideogame.platforms = videogame.platforms;
              copyVideogame.background_image = videogame.background_image;              
              copyVideogame.platforms = videogame.platforms.map(e => e.platform.name);
              copyVideogame.description = videogame.description;

    
           //const bdData =  await Videogame.findByPk(idVideogame);  FALTA 


            return res.status(200).json({copyVideogame});           
        }
        else{
           return res.status(400).json({'Mensage': ` ${idVideogame} no es un Id valido`});
        }
    }
   }catch(error){
    return res.status(404).json({'Error': error.message });
   }    
})


module.exports = router;