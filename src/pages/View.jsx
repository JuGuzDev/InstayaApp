import React from 'react'
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'
import mapaSeguimiento from '/src/assets/mapaSeguimiento1350x285.jpg'
import '../slyles/View.css'
import { Outlet, Link } from "react-router-dom";

const pedidos = [
  {
    id: 1,
    fecha_recogida: '22-jun-20',
    ciudad_origen: 'Bogota',
    direccion_origen: 'call 1 # 34',
    ciudad_destino: 'Medellin',
    direccion_destino: 'cra 3 # 5',
    estado: 'entregado'
  },
  {
    id: 2,
    fecha_recogida: '4-feb-23',
    ciudad_origen: 'Tunja',
    direccion_origen: 'call 2 # 55',
    ciudad_destino: 'Barranquilla',
    direccion_destino: 'cra 9 # 50',
    estado: 'cancelado'
  }
]


function View() {
  return (
    <div>
      <Navigator
        primero='Inicio'
        enlaceprim='/'
        segundo='Crear orden'
        enlacesec='/Create'
        tercero='Cerrar sesion'
        enlaceterc=''
        cuarto=''
        enlacecua=''/>
      
     <br />
      <div className='container' >
      <form className='letraView'>
           <img src={mapaSeguimiento} alt='mapa seguimiento' 
            width="100%" height="180" style={{objectFit: "cover"}} />
          <br />
          <br />
          <h1>Seguimiento  de ordenes</h1>
          <p> Puedes hacer seguimiento a todos tus envios solo buscalo en la lista y dar clic en el numero de  la orden o simplemente introduce el numero de la orden en el campo de busqueda</p>
          <br />
          <br />
           <label > <h4>Número de orden </h4> </label> 

                <div className='col-4' >
                  <input type="text" placeholder='Buscar' className='form-control ' /> 
                </div>
   
           
           <br /> 
 
           <div className='cuerpoView' >
           <div className='table-responsive'>
            <table className='table table-sm table-borderless table-hover table-secondary' >
 
              <thead >
                <tr>
                  <th># Orden</th>
                  <th>Fecha</th>
                  <th>Ciudad origen</th>
                  <th>Direccion origen</th>
                  <th>Ciudad destino</th>
                  <th>Direccion destino</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                {pedidos.map((pedido, index) => {
                  
                  return(
                    <tr key={index}>
                    
                    <th> 
                      <Link to= {"/Update/" + pedido.id}> {pedido.id}</Link> 
                    </th>
                    <td>{pedido.fecha_recogida}</td>
                    <td>{pedido.ciudad_origen}</td>
                    <td>{pedido.direccion_origen}</td>
                    <td>{pedido.ciudad_destino}</td>
                    <td>{pedido.direccion_destino}</td>
                    <td>{pedido.estado}</td>
                  </tr>)
                })}


              </tbody>
            </table>
           </div>

           </div>
           
  
       </form>
      </div>
             
     <br />
     <br />
      <Footer/>
    </div>
  )
}

export default View