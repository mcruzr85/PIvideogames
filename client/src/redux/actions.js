import { throws } from "assert";

export const ADD_VIDEOGAME = "ADD_VIDEOGAME";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAILS = "GET_DETAILS";
export const RESET_DETAILS = "RESET_DETAILS";
export const GET_GENRES = "GET_GENRES";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_ORIGEN = "FILTER_ORIGEN";
export const ORDER = "ORDER";



/*export function addVideogame(videogame){ //payload es videogame, es para mandar info adicional

    return async function(dispatch){
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(videogame)
            };
            fetch('http://localhost:3001/videogames', requestOptions)
            .then(response => response.json())
           
        }catch(error){
            console.log(error.message);
        }
    }    
}*/


export const addVideogame = (videogame) => async (dispatch)=> {   //payload es videogame, es para mandar info adicional
        try{
            const {name, description, released, rating, background_image, platforms,  genres } = videogame;
             if (
                !name |
                !description |
                !released |
                !rating |
                !background_image |
                !platforms|
                !genres.length
              ) {
                throw new Error('Incomplete data');            

           
            }else{
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify(videogame)
                };
    
                console.log('estoy en action addvideogame para insertar')
                console.log(videogame)
               const response = await fetch('http://localhost:3001/videogames', requestOptions)
                const data = await  response.json()
                console.log('aqui mismo luego del fetch la data es')
                console.log(data)
                return dispatch(
                    {
                     type: ADD_VIDEOGAME, 
                     payload: data
                    }); 
            }
        }catch(error){
           // console.log(error);
           alert(error.message);
        }
    }    


export const getAllVideogames = (name) => async (dispatch)=> {   
    try{        
        console.log(`desde la action getAllVideogames llego con name valor ${name}`) 
       
        let response = '';
        if(name){           
           response = await fetch(`http://localhost:3001/videogames?name=${name}`);
        }
       
          else{
            response = await fetch(`http://localhost:3001/videogames`);      
          }    
      
        const data = await response.json();
            console.log(`desde la action getAllVideogames resultado de  data es`)
            console.log(data)
              return dispatch(
                {
                 type: GET_VIDEOGAMES, 
                 payload: data
                }); 
  
    }catch(error){
        console.log(error.message);
    }           
};


export const getGenres = (source) => async (dispatch) => {
    try{
        let response;
        if(source === "db"){
            console.log(`el valor de source es ${source}`)
            response = await fetch('http://localhost:3001/genresdb');
        }  
        else if(source === "api"){
            console.log(`el valor de source es ${source}`)
            response = await fetch('http://localhost:3001/genres');
        }                     
        const data = await response.json();
        console.log('desde action getGenres imprimo la data y se a paso al payload')
        console.log(data)
        return dispatch(
            {
             type: GET_GENRES, 
             payload: data
            }); 
        }catch(error){
            console.log(error.message);
    }
}

export const getDetails = (id, creado) => async (dispatch) => {
    try{        
        const response = await fetch(`http://localhost:3001/videogames/${id}?creado=${creado}`);
        const data = await response.json();
        console.log(`desde la action getDetails imprimo lo que llega de la api`)
        console.log(data.copyVideogame)
        return dispatch(
          { 
            type: GET_DETAILS,
            payload: data.copyVideogame
          });
    }catch(error){
        console.log(error.message);
    };
};

export const resetDetails = ()=>{
    return{
        type: RESET_DETAILS,
    }
};

export function filterOrigen(criterio){
    return{
        type:FILTER_ORIGEN,
        payload:criterio
    }
}

export function filterGenre(criterio){
    return{
        type:FILTER_GENRE,
        payload:criterio
    }
}

export function orderCards(id){
    return {
        type:ORDER,
        payload:id
    }
}



/**
 * export function addVideogame(videogame){ //payload es videogame, es para mandar info adicional

    return async function(dispatch){
        try{
            let data = await fetch.post('http://localhost:3001/videogames', videogame);
            return dispatch({
                type: ADD_VIDEOGAME,    //action creators son funciones que devuelven acciones   
                payload: data.videogame
            });
        }catch(error){
            console.log(error.message);
        }
    }    
}

antes de con
export const getAllVideogames = (name) => async (dispatch)=> {   
    try{        
        console.log(`desde la action getAllVideogames llego con name valor ${name}`) 
       
        let response = '';
        if(name){           
           response = await fetch(`http://localhost:3001/videogames?name=${name}`);
        }
       
          else{
            response = await fetch(`http://localhost:3001/videogames`);      
          }    
      
        const data = await response.json();
            console.log(`desde la action getAllVideogames resultado de  data es`)
            console.log(data)
              return dispatch(
                {
                 type: GET_VIDEOGAMES, 
                 payload: data
                }); 
  
    }catch(error){
        console.log(error.message);
    }           
};
 */