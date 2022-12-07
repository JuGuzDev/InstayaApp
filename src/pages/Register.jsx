import React from "react"
import { Outlet, Link } from "react-router-dom";
import '../slyles/Login.css'
import '../slyles/Register.css'
import LabelInput from '../components/LabelInput'
import logoLineal170x50 from '../assets/logolineal170x50.png'
import {useForm} from "react-hook-form";
import {useEffect, useState} from 'react';
import axios from "axios";

function Register() {

  const {register, formState: {errors}, handleSubmit} = useForm()
  const customSubmit = (data) => {console.log(data)}//ojo esto modificar data 

  return(
  <div className= "contenedorPrincipal" >

    <div className="contenedorCardRegister" >
      <div className="contenedorImagen">
        <img src={logoLineal170x50} alt="logoLineal" width={238} height={60} />
      </div>

      <form className="contenedorLabel" onSubmit={handleSubmit(customSubmit)}>
        < LabelInput
            etiqueta= "Nombre"
            id= "nombre"
            tipo= "text"   />
        < LabelInput 
            etiqueta= "Usuario"
            id= "usuario"
            tipo= "text"  />
        < LabelInput 
            etiqueta= "Contraseña" 
            id= "contrasena"
            tipo= "password" />
        < LabelInput 
            etiqueta= "Correo" 
            id= "correo"
            tipo= "email" />
        <div className="contenedorBtn">
        <Link to="/Login"> {<button className="btnLogin" type="submit" >Registrar</button>}</Link>
        </div>
      </form>


    </div>

  </div>  

  )
}

export default Register;