/*📍 GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/
//https://api.rawg.io/api/genres?key=928a106257314462a3a43bf37033df35
const axios = require('axios');
const {Router} = require('express');
const { Genre } = require('../db');

const router = Router();

const getGenresFromApi = async () => {
  try {
    let resultData = await  axios('https://api.rawg.io/api/genres?key=928a106257314462a3a43bf37033df35')  
    let newResult = resultData.data.results;
    let arrayGenres = newResult.map(genre => {
       return {
           id: genre.id,
           name: genre.name             
       }
   })   
      await Genre.bulkCreate(arrayGenres);//allows you to insert multiple records to your database table with a single function call
      return arrayGenres;
  } catch (error) {
      return {error: error.message}
  }
};

router.get("/", async (req,res)=>{ //ok funciona
    try{   
     let arrayGenres = await getGenresFromApi();
      return res.status(201).send({ arrayGenres});
    }catch(error){
        return res.status(400).json({"Error": error.message});
    }    
});

module.exports = router;