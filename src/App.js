import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemlistContainer from "./Containers/ItemListContainer";
import ComponenteFooter from "./components/ComponenteFooter";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHeader} className="logoHeader col-6" alt="logoHeader" />
      </header>
      <NavBar />
      <ItemlistContainer />
      <h1> Clase 6 - Promises, asincronía y MAP </h1>
      <p>
        Hola, este es el proyecto de la Clase 6 subida al gitHub.
      </p>
      <hr/>
      <span> Se utiliza JSON para mostrar el listado con sus datos. Y Muestra el listado en 3 segundos</span>
      <ComponenteFooter/>

    </div>
  );
}

export default App;
