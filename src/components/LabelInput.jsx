import React from "react"
import {useForm} from "react-hook-form";


function LabelInput(props){

  return(
      <div className="mb-3 row" >
        <label htmlFor="{input$(props.etiqueta)}" className="col-sm-2 col-form-label">{props.etiqueta}</label>
        <div className="col-sm-10">
          <input className="form-control " id={props.id} type={props.tipo} placeholder={props.placeholder} required="required"  />        
        </div>
      </div> 
  );
  
}

export default LabelInput;