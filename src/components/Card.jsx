import React from "react";
import '../slyles/Card.css'

function Card({cuerpo}) {
  return(
    <div >
      <div className="card shadow p-3 mb-5 bg-white rounded" >
        <div className="contenedorPrincipalCard">
          {cuerpo}     
        </div>
      </div>
    </div>
  );
      
    

}
export default Card;