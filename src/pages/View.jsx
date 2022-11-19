import React from 'react'
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'
import mapaSeguimiento from '/src/assets/mapaSeguimiento1350x285.jpg'
import '../slyles/View.css'


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
                  <th>ciudad origen</th>
                  <th>direccion origen</th>
                  <th>ciudad destino</th>
                  <th>Direccion destino</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><a href="#" class="link-primary">1</a></td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Tunja</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cumplido</td>
                </tr>
             
                <tr>
                <td><a href="#" class="link-primary">27</a></td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cali</td>
                  <td>calle 1 carrera 1</td>
                  <td>Guardado</td>
                </tr>

                <tr>
                <td><a href="#" class="link-primary">2</a></td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Villavicencio</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cancelado</td>
                </tr>

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