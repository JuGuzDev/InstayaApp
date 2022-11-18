import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../slyles/Login.css'
import LabelInput from '../components/LabelInput'
import logoLineal170x50 from '../assets/logolineal170x50.png'


function Login() {
  return(
      <div className= "contenedorPrincipal" >

        <div className="contenedorCard" >
          
          <div className="contenedorImagen">
            <img src={logoLineal170x50} alt="logoLineal" width={238} height={60} />
          </div>

          <form className="contenedorLabel">
            < LabelInput
              etiqueta= "Usuario"/>
            < LabelInput 
              etiqueta= "Contraseña"/>

            <div className="contenedorLink">
              <Link to="/Register">Registrarse</Link>            
            </div>
          
          </form>


          <div className="contenedorBtn">
            <button className="btnLogin" type="submit">Ingresar</button>
          </div>

        </div>

        <Outlet />
      </div>
      


  )
}

export default Login;
  






