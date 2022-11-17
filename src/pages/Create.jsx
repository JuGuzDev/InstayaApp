import React from "react"
import Card from '../components/Card'
import LabelInput from "../components/LabelInput";
import '../slyles/Create.css'


function Login() {
  return(

    
    <div className = "contenedorPrincipalCreate">
      <div >

        <div className="row justify-content-evenly">
          <div className="col-6">
            <h1>Creacion de orden </h1>
            <Card 
              cuerpo= {<><LabelInput etiqueta= "nombre" />
              <LabelInput etiqueta= "Apellido" /><LabelInput etiqueta= "correo" /> </>}          
            />
          </div>

          <div className="col-4">
           fotos aqui
          </div>
          
        </div>

      </div>

    </div>
     
  
  )
}

export default Login;