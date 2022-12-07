import React from "react"
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import Card from '../components/Card'
import LabelInput from "../components/LabelInput";
import '../slyles/Create.css'
import imagen1 from '../assets/caja1Envio450x269.jpg'
import imagen2 from '../assets/caja2Envio.jpg'
import imagen3 from '../assets/caja3Envio.jpg'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import axios from "axios"
import dateFormat from "dateformat"
//import pedido from "../../InstaYaBE/src/models/pedido";

const Update = () => {
  const { id } = useParams()
  const [data, setPedidos] = useState(null)
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();

  const customSubmit = (dataForm) => {
    const pedidoObject = {
          usuario:dataForm.usuario,
          fecha_recogida:dataForm.fecha_recogida,
          hora_recogida:dataForm.hora_recogida,
          ancho:dataForm.ancho,
          alto:dataForm.alto,
          largo:dataForm.largo,
          peso:dataForm.peso,
          delicado:dataForm.delicado,
          estado:dataForm.estado,
          nombre_origen:dataForm.nombre_origen,
          identificacion_origen:dataForm.identificacion_origen,
          direccion_origen:dataForm.direccion_origen,
          telefono_origen:dataForm.telefono_origen,
          ciudad_origen:dataForm.ciudad_origen,
          pais_origen:dataForm.pais_origen,
          nombre_destino:dataForm.nombre_destino,
          identificacion_destino:dataForm.identificacion_destino,
          telefono_destino:dataForm.telefono_destino,
          direccion_destino:dataForm.direccion_destino,
          ciudad_destino:dataForm.ciudad_destino,
          pais_destino:dataForm.pais_destino
        }
        axios
            .put("http://localhost:9000/api/pedidos/" + id, pedidoObject)
            .then(response => console.log(response.data))
  }
  
  return (

    <div>
      <Navigator
        primero="Inicio"
        enlaceprim="/"
        segundo="Crear orden"
        enlacesec="/Create"
        tercero="Seguimiento"
        enlaceterc="/View"
        cuarto="Cerrar sesion"
        enlacecua=""/>   
      <form className="form" onSubmit={handleSubmit(customSubmit)}>
      <div className="container" >
            <div className = "contenedorPrincipalCreate" >
              
              <div className="row justify-content">
              
                <div className="col-8">
                  <div className="container"> 
                    <h1 >Actualizacion de orden </h1>
                    <br />
                    <p>Actualiza los datos de tu orden siempre y cuando el estado no sea aun entregado</p>

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
                            name= "fecha_recogida"
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
                              placeholder= "Si/No"
                              name="delicado" /> 
                          </div>

                        <div className="col-4">
                          <LabelInput 
                            etiqueta= "Hora" 
                            id= "hora_recogida"
                            tipo= "time"
                            placeholder="hh:mm" 
                            name="hora_recogida" />
                          <LabelInput 
                            etiqueta= "Peso" 
                            id= "peso"
                            tipo= "number"
                            placeholder="Kilogramos"
                            name= "peso" />
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
                        tipo= "text" 
                        name="nombre_origen" />
                      <LabelInput 
                        etiqueta= "Cedula/NIT"
                        id= "identificacion_origen"
                        tipo= "number"
                        name= "identificacion_origen" />
                      <LabelInput 
                        etiqueta= "Telefono" 
                        id= "telefono_origen"
                        tipo= "text"
                        name="telefono_origen" />
                      <LabelInput 
                        etiqueta= "Direccion"
                        id= "direccion_origen"
                        tipo= "text" 
                        name="direccion_origen" />
                      <LabelInput
                         etiqueta= "Ciudad"
                         id= "ciudad_origen"
                         tipo= "text" 
                         name="ciudad_origen" />
                      <LabelInput
                         etiqueta= "Pais" 
                         id= "pais_origen"
                         tipo= "text" 
                         name="pais_origen" />
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
                        tipo= "text" 
                        name= "nombre_destino" />
                      <LabelInput 
                        etiqueta= "Cedula/NIT" 
                        id= "identificacion_destino"
                        tipo= "text"
                        name= "identificacion_destino"/>
                      <LabelInput 
                        etiqueta= "Telefono" 
                        id= "telefono_destino"
                        tipo= "text"
                        name="telefono_destino" />
                      <LabelInput 
                        etiqueta= "Direccion"
                        id= "direccion_destino"
                        tipo= "text" 
                        name="direccion_destino" />
                      <LabelInput 
                        etiqueta= "Ciudad" 
                        id= "ciudad_destino"
                        tipo= "text"
                        name= "ciudad_destino"/>
                      <LabelInput 
                        etiqueta= "Pais" 
                        id= "pais_destino"
                        tipo= "text"
                        name= "pais_destino" />
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
                  <button className="btnCreate" type="submit">Actualizar orden</button>
                  <a className="btnCreate" onClick={() => deleteClick(pedidos._id)}>Eliminar orden</a>
                
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

export default Update;