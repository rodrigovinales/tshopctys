import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemlistContainer from "./components/ItemListContainer";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHeader} className="logoHeader col-6" alt="logoHeader" />
      </header>
      <NavBar />
      <ItemlistContainer mensaje="saludo enviado desde app.js utilizando componente de clase, una constante y props."/>

      <h1> Clase 4 - Componentes I </h1>
      <p>
        Hola, este es el proyecto de la Clase 4 subida al gitHub.
      </p>
      <hr/>
      <span> Se utiliza fontawesome para agregar un canasto en sector NavBar instalando la libreria y realizando import sobre el mismo.</span>
      <p> Se crea archivo CartWidget.js e ItemlistContainer.js </p>
    </div>
  );
}

export default App;
