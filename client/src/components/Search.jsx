import React, { useState } from "react";
import * as actions from '../redux/actions';
import { SearchBoton } from "../styled";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("");
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSearch(name) {  
    if(name===""){
    return  alert('You should type a name');
    }  
    dispatch(actions.getAllVideogames(null, name));     
    navigate("/home");
    setName("");  
    setReset(true);  
  }

  function resetSearch() {     
    dispatch(actions.resetSearch()); 
    setReset(false);

  }

  return (
    <div>
      <input
        type="text"
        name="search"
        value={name}
        placeholder="Search a videogame"
        onChange={handleName}
      />
      <SearchBoton onClick={()=>handleSearch(name)}>
       <svg
        viewBox="0 0 24 24"
        fill="#231B4A"
        height="1em"
        width="1em"      
        >
        <path d="M19.023 16.977a35.13 35.13 0 01-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0016 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
       </svg> Search
      </SearchBoton>

      {reset ? 
      (<SearchBoton onClick={resetSearch}>
       Reset 
      </SearchBoton>) : null}
      
    </div>
  );
};

export default Search;
