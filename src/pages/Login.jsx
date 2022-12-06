import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../slyles/Login.css'
import LabelInput from '../components/LabelInput'
import logoLineal170x50 from '../assets/logolineal170x50.png'
import {useForm} from "react-hook-form";



function Login() {



  return(
      <div className= "contenedorPrincipal" >
        
        <form onSubmit={handleSubmit(customSubmit)}>
        <div className="contenedorCard" >

        
          <div className="contenedorImagen">
            <img src={logoLineal170x50} alt="logoLineal" width={238} height={60} />
          </div>

          <form className="contenedorLabel"> 
            < LabelInput
              etiqueta= "Usuario"
              id= "usuario"
              tipo= "text"/>
            < LabelInput 
              etiqueta= "Contraseña" 
              id= "contrasena"
              tipo= "password"/>

            <div className="contenedorLink">
              <Link to="/Register">Registrarse</Link>            
            </div>
          
          </form>

          <div className="contenedorBtn">
          <Link to="/View"> {<button className="btnLogin" type="submit">Ingresar</button>}</Link>
            
          </div>
          
        </div>
        </form>
        <Outlet />
        
      </div>
      


  )
}

export default Login;
  






