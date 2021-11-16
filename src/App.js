import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemlistContainer from "./components/ItemListContainer";
import ComponenteFooter from "./components/ComponenteFooter";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHeader} className="logoHeader col-6" alt="logoHeader" />
      </header>
      <NavBar />
      <ItemlistContainer />
      <h1> Clase 5 - Componentes II </h1>
      <p>
        Hola, este es el proyecto de la Clase 5 subida al gitHub.
      </p>
      <hr/>
      <span> Se adiciona ItemCount.js para la funcionalidad de sumar o restar cantidad de productos.</span>
      <p> Se lo importa en ItemlistContainer.js </p>
      <ComponenteFooter/>

    </div>
  );
}

export default App;
