import React from "react"
import Card from '../components/Card'
import LabelInput from "../components/LabelInput";
import '../slyles/Create.css'
import imagen1 from '../assets/caja1Envio450x269.jpg'
import imagen2 from '../assets/caja2Envio.jpg'
import imagen3 from '../assets/caja3Envio.jpg'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'


function Update() {
  return(

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

      <div className="container">
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

                                <LabelInput etiqueta= "Fecha" />
                                <div className="mb-3 row">
                                  <div className="row align-items-center">
                                    <div className="col">
                                      <label className="col-sm-2 col-form-label">Dimensiones</label>
                                      <h4 className="letraRoja">Centimetros</h4>
                                    </div>                          
                                    <div className="col">                           
                                      <input type="number" className="form-control "/>
                                    </div>                          
                                    <div className="col">
                                      <input type="number" className="form-control "/>
                                    </div>
                                    <div className="col">
                                      <input type="number" className="form-control "/>
                                  </div>



                                </div>


                                </div>
                                  
                              </div>

                              <div className="col-4">
                                <LabelInput etiqueta= "Hora" />
                                <LabelInput etiqueta= "Peso" placeholder="Kilogramos"/>                    
                              </div>
                            </div>

                            <div className="row align-items-center ">
                              <div className="col">                           
                                  <div className=" mb-3 row">
                                    <div className="col">
                                      <label className="col-sm-2 col-form-label">Delicado</label>
                                    </div>                          
                                    <div className="col">                           
                                      <input type="text" className="form-control "/>
                                    </div> 
                                  </div>  
                              </div>                          
                              <div className="col">
                                <LabelInput etiqueta= "Estado" />
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
                            <LabelInput etiqueta= "Nombre" />
                            <LabelInput etiqueta= "Cedula/NIT" />
                            <LabelInput etiqueta= "Telefono" />
                            <LabelInput etiqueta= "Direccion" />
                            <LabelInput etiqueta= "Ciudad" />
                            <LabelInput etiqueta= "Pais" />
                            </>
                          }
                        /> 

                        <Card
                          cuerpo={
                            <>
                            <h4>Datos destino</h4>
                            <br />
                            <LabelInput etiqueta= "Nombre" />
                            <LabelInput etiqueta= "Cedula/NIT" />
                            <LabelInput etiqueta= "Telefono" />
                            <LabelInput etiqueta= "Direccion" />
                            <LabelInput etiqueta= "Ciudad" />
                            <LabelInput etiqueta= "Pais" />
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
                  <button className="btnCreate" type="submit">Actualizar</button>
                
                </div>
              </div>

            </div>

          </div>
          <br />
          <br />

          <Footer />
    </div>  
  
  )
}

export default Update;