// import { useState } from 'react'
import "./App.css";
import Cuadrillas from "./components/Cuadrillas";
import GesrionA from "./components/GestionA";
import mapa from "./assets/png/mapa.PNG";
import logo from "./assets/jpeg/logoaguasc.jpeg"
function App() {
  return (
    <>
      <h2 className="v">Vista Rapida</h2>
      <div className="app">

        <div className="imagenes">
          <img src={mapa} className="mp"/>
          <img src={logo} className="logo"/>
        </div>

        <div>
          <GesrionA />
          <Cuadrillas />
        </div>
      </div>
      <div class="barra-inferior"></div>

    </>
  );
}
export default App;
