import React from 'react'
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'
import mapaSeguimiento from '/src/assets/mapaSeguimiento1350x285.jpg'
import '../slyles/View.css'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"

const View = () => {
    const [pedidos, setPedidos] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:9000/api/pedidos")
            .then((response) => {
                console.log(response.data)
                setPedidos(response.data)
            })
    }, [])

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
          <p> Puedes hacer seguimiento a todos tus envios solo buscalo en la lista y dar clic en el numero de  la orden. </p>
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
                {pedidos !==null ? pedidos.map((pedido, index) => {
                  
                  return(
                    <tr key={index}>
                    
                    <th> 
                      <Link to= {"/Update/" + pedido._id}> {index}</Link> 
                    </th>
                    <td>{pedido.fecha_recogida}</td>
                    <td>{pedido.ciudad_origen}</td>
                    <td>{pedido.direccion_origen}</td>
                    <td>{pedido.ciudad_destino}</td>
                    <td>{pedido.direccion_destino}</td>
                    <td>{pedido.estado}</td>
                  </tr>)
                }) : ''}  
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