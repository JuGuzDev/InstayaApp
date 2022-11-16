import React from "react"
import '../slyles/Login.css'
import '../slyles/Register.css'
import LabelInput from '../components/LabelInput'
import logoLineal170x50 from '../assets/logolineal170x50.png'

function Login() {
  return(
  <div className= "contenedorPrincipal" >

    <div className="contenedorCardRegister" >
      <div className="contenedorImagen">
        <img src={logoLineal170x50} alt="logoLineal" width={238} height={60} />
      </div>

      <form className="contenedorLabel">
        < LabelInput
          etiqueta= "Nombre"/>
        < LabelInput 
          etiqueta= "Usuario"/>
        < LabelInput 
          etiqueta= "Contraseña"/>
        < LabelInput 
          etiqueta= "Correo"/>
      </form>
      <div className="contenedorBtn">
        <button className="btnLogin" type="submit" >Registrar</button>
    </div>

  </div>


  </div>  

  )
}

export default Login;