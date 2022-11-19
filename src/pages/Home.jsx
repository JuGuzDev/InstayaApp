import React from "react"
import "../slyles/Home.css"
import logoInstaYaSinfondo250x250 from "../assets/logoInstaYaSinfondo250x250.png"

function Home(){
  return (
    <body className="estiloB">
    <div className="container">
      <div className="btn btn-outline">
        <button type="submit" className="btnHome">Iniciar sesion</button>
      </div>
    </div>   
    <img src={logoInstaYaSinfondo250x250} alt="logo" className="position-absolute top-0 start-0"/>   
    </body>

  );
}

export default Home;