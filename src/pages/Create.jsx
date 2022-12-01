import React from "react"
import Card from '../components/Card'
import LabelInput from "../components/LabelInput";
import '../slyles/Create.css'
import imagen1 from '../assets/caja1Envio450x269.jpg'
import imagen2 from '../assets/caja2Envio.jpg'
import imagen3 from '../assets/caja3Envio.jpg'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import {useForm} from "react-hook-form";


function Create() {

  const {register, formState: {errors}, handleSubmit} = useForm()
  const customSubmit = (data) => {console.log(data)}//ojo esto modificar data 

  return(

    <div>
      <Navigator
        primero="Inicio"
        enlaceprim="/"
        segundo="Seguimiento"
        enlacesec="/View"
        tercero="Cerrar sesion"
        enlaceterc=""
        cuarto=""
        enlacecua=""/>

    <form onSubmit={handleSubmit(customSubmit)}>
    <div className="container">
      <div className = "contenedorPrincipalCreate" >
        
        <div className="row justify-content">
        
          <div className="col-8">
            <div className="container"> 
              <h1 >Creacion de orden </h1>
              <br />
              <p>Crea la orden con los datos de las caracteristicas del paquete, de quien hace el envio y de quien va recibir el envio, todos los campos tienen que estar ingresados.</p>

              <br />
              <br />
              
                  <Card 
                    cuerpo= {
                    <>
                      <h4>Datos encomienda</h4>
                      <br />

                      <div className="row justify-content-evenly">            
                        <div className="col-8">

                          <LabelInput 
                            etiqueta= "Fecha"
                            id= "fecha_recogida"
                            tipo= "date"
                            />
                          <div className="mb-3 row">
                            <div className="row align-items-center">
                              <div className="col">
                                <label className="col-sm-2 col-form-label">Dimensiones</label>
                                <h4 className="letraRoja">Centimetros</h4>
                              </div>                          
                              <div className="col">                           
                                <input type="number"  className="form-control " placeholder="L"/>
                              </div>                          
                              <div className="col">
                                <input type="number" className="form-control " placeholder="W"/>
                              </div>
                              <div className="col">
                                <input type="number" className="form-control " placeholder="H"/>
                            </div>



                          </div>


                          </div>
                            <LabelInput 
                              etiqueta= "Delicado" 
                              id= "delicado"
                              tipo= "text" 
                              placeholder= "Si/No"/> 
                          </div>

                        <div className="col-4">
                          <LabelInput 
                            etiqueta= "Hora" 
                            id= "hora_recogida"
                            tipo= "time"
                            placeholder="hh:mm" />
                          <LabelInput 
                            etiqueta= "Peso" 
                            id= "peso"
                            tipo= "number"
                            placeholder="Kilogramos"/>
                        </div>
                      </div>

                    </>

                    }                  
                  />  

                  <Card
                    cuerpo={
                      <>
                      <h4>Datos origen</h4>
                      <br />
                      <LabelInput 
                        etiqueta= "Nombre" 
                        id= "nombre_origen"
                        tipo= "text"/>
                      <LabelInput 
                        etiqueta= "Cedula/NIT"
                        id= "identificacion_origen"
                        tipo= "number" />
                      <LabelInput 
                        etiqueta= "Telefono" 
                        id= "telefono_origen"
                        tipo= "text"/>
                      <LabelInput 
                        etiqueta= "Direccion"
                        id= "direccion_origen"
                        tipo= "text" />
                      <LabelInput
                         etiqueta= "Ciudad"
                         id= "ciudad_origen"
                         tipo= "text" />
                      <LabelInput
                         etiqueta= "Pais" 
                         id= "pais_origen"
                         tipo= "text"/>
                      </>
                    }
                  /> 

                  <Card
                    cuerpo={
                      <>
                      <h4>Datos destino</h4>
                      <br />
                      <LabelInput 
                        etiqueta= "Nombre"
                        id= "nombre_destino"
                        tipo= "text" />
                      <LabelInput 
                        etiqueta= "Cedula/NIT" 
                        id= "identificacion_destino"
                        tipo= "text"/>
                      <LabelInput 
                        etiqueta= "Telefono" 
                        id= "telefono_destino"
                        tipo= "text"/>
                      <LabelInput 
                        etiqueta= "Direccion"
                        id= "direccion_destino"
                        tipo= "text" />
                      <LabelInput 
                        etiqueta= "Ciudad" 
                        id= "ciudad_destino"
                        tipo= "text"/>
                      <LabelInput 
                        etiqueta= "Pais" 
                        id= "pais_destino"
                        tipo= "text"/>
                      </>
                    }
                  />                 

            </div>
          </div>
         
         
          <div className="col-4">
            <div  className="contenedorImagenCreate">
              <img src={imagen1} alt="imagen1" className="imagen1"/>
              <img src={imagen2} alt="imagen2" className= "imagen2"/>
              <img src={imagen3} alt="imagen3" className= "imagen3"/> 

            </div> 
          </div> 
        

                

          <div className="contenedorBtnCreate">
          <br />
            <button className="btnCreate" type="submit">Crear orden</button>
           
          </div>
        </div>

      </div>

    </div>
    </form>
    <br />
    <br />

        <Footer />
    </div>
    
     
  
  )
}

export default Create;