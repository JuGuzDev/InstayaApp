import React from "react";
import {Link} from "react-router-dom"

const Navigator = (props) => {
    return (
    <div>
    <nav className="navbar navbar-expand-md navbar-blue" style={{background: "#12465B"}}>
        <div className="container-fluid">
          <Link to='/'>
             <img src='/src/assets/logolineal170x50.png' width='120' height='40'/>
          </Link>    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto" >
                 <li className="nav-item active">
                    <Link className="nav-link" style={{color:"white"}} to= {props.enlaceprim}> {props.primero} </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" style={{color:"white"}} to= {props.enlacesec}> {props.segundo} </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link" style={{color:"white"}} to= {props.enlaceterc}> {props.tercero} </Link>
                 </li>
                 <li className="nav-item">
                    <Link className="nav-link"  style={{color:"white"}}to= {props.enlacecua}> {props.cuarto} </Link>
                 </li>


            </ul>
          </div>
        </div>
    </nav>
    </div>
    )
}

export default Navigator;