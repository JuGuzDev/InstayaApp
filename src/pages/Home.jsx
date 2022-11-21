import React from "react"
import { Outlet, Link } from "react-router-dom";
import "../slyles/Home.css"
import logoInstaYaSinfondo250x250 from "../assets/logoInstaYaSinfondo250x250.png"


function Home(){
  return (
    <body className="estiloB">
    <div className="container">
      <div className="btn btn-outline">
      <Link to="/Login"> {<button type="button" className="btnHome">Iniciar sesion</button>}</Link>
      </div>
    </div>   
    <img src={logoInstaYaSinfondo250x250} alt="logo" className="position-absolute top-0 start-0"/> 
    <Outlet />  
    </body>

  );
}

export default Home;