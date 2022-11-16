import React from "react"
import LabelInput from "../components/LabelInput"
import Navigator from "../components/Navigator"

function Login() {
  return(
   
   <div>
    <Navigator />
      <p> hola moco</p>
    < LabelInput 
        etiqueta= "nombre"/>
    < LabelInput 
        etiqueta= "apellido"/>
    </div>
  )
}

export default Login;