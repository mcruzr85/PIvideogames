import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
const pageNumbers = [];

for(let i = 1; i<= Math.ceil(totalPosts/postPerPage); i++){ //aqui tengo un arreglo con los numeros de las 
  pageNumbers.push(i);                                      //paginas a mostrar
}
//paginate viene del padre y lo que hace es cambiar la pagina actual al numero que esté en el boton {n}
  return (
    <div style={{position: "absolute", left: "50%",top: "145px", transform: "translateX(-50%)", paddingBottom:"2rem", cursor:"pointer"}}>
    <nav >
      <ul style={{display:"flex"}} >
        {pageNumbers.map(n => (
          <li key={n} style={{listStyle:"none"}} >
             <button onClick={()=>paginate(n)} style={{fontSize:"12px"}}>
              {n}
              </button>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Pagination