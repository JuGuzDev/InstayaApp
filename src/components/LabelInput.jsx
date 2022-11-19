import React from "react"


function LabelInput({etiqueta}){
  return(
    <div >
      <div className="mb-3 row">
        <label htmlFor="input{etiqueta}" className="col-sm-2 col-form-label">{etiqueta}</label>
        <div className="col-sm-10">
          <input className="form-control " id="input{etiqueta}"/>
        </div>
      </div>
    </div>

  );
}

export default LabelInput;