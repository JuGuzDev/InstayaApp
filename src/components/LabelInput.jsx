import React from "react"
import '../slyles/LabelInput.css'

function LabelInput({etiqueta}){
  return(
    <div>
      <div className="mb-3 row">
        <label htmlFor="input{etiqueta}" className="col-sm-2 col-form-label">{etiqueta}</label>
        <div className="col-sm-10">
          <input type={etiqueta} className="form-control" id="input{etiqueta}"/>
        </div>
      </div>
    </div>

  );
}

export default LabelInput;