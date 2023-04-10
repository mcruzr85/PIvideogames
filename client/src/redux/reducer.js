import {
  GET_VIDEOGAMES,
  ADD_VIDEOGAME,
  GET_DETAILS,
  RESET_DETAILS,
  GET_GENRES,
  FILTER_GENRE, FILTER_ORIGEN,
  ORDER,
} from "./actions";
//,GET_UPDATEDVIDEOGAMES
const initialState = {
  videogames: [],
  videogamesCopy: [],
  videogameDetails: {},
  genres: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_VIDEOGAME:
      return {
        ...state,
        videogames: [...state.videogames, payload], //, //agrego el vg creado a vgs y vgsDb
        videogamesCopy: [...state.videogames, payload],
      };

    case GET_VIDEOGAMES:
      console.log(
        `se ejecuto en reducer getVideogames ${payload} y muestro el payload`
      );
      console.log(payload);
      return {
        ...state, 
        videogames: payload,
        //videogamesCopy: payload,
      }; //

    case GET_DETAILS:
      console.log(
        `se ejecuto en reducer en get details, payload es ${payload}`
      );
      return {
        ...state,
        videogameDetails: payload,
      };

    case RESET_DETAILS:
      console.log(`se ejecuto en reducer en reset details`);

      return {
        ...state,
        videogameDetails: {},
      };

    case GET_GENRES:
      console.log(`se ejecuto en reducer getVideogames ${payload} y muestro el payload`);
      console.log(payload);
      return {
        ...state,
        genres: payload,
      };
      

    case FILTER_GENRE:
        const filterCopy = [...state.videogames];
        const filterGender = filterCopy.filter(vg => vg.gender.includes(payload))
        console.log(filterGender)
        return{
            ...state, 
            videogames: filterGender

        }   

        case FILTER_ORIGEN:
           /* const filterCopy = [...state.videogames];
            const filterGender = filterCopy.filter(vg => vg.gender.includes(payload))
            console.log(filterGender)*/
            return{
                ...state, 
                videogames: filterGender
    
            }

    default:
      return state;
  }
}
