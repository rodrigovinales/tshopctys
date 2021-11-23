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
      <span> Se utiliza API de Marvel (Solicita Key y Hash5, por eso tuve que declarar variables para tomar ese valor). Y Muestra el listado en 3 segundos</span>
      <p> En la linea 9 de Item.js tuve que utilizar esa extension, ya que viene por separado lo que es thumbnail, extension y path de este array de objetos en particular.</p>
      <ComponenteFooter/>

    </div>
  );
}

export default App;
