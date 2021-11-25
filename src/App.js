import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import logoHeader from "./img/LOGOshopcomputers.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import ItemlistContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ComponenteFooter from "./components/ComponenteFooter";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoHeader} className="logoHeader col-6" alt="logoHeader" />
      </header>
      <NavBar />
      {/* <ItemlistContainer /> */}
      <ItemDetailContainer />
      <h1> Clase 7 - Consumiendo APIs </h1>
      <p>
        Hola, este es el proyecto de la Clase 7 subida al gitHub.
      </p>
      <hr/>
      <ComponenteFooter/>

    </div>
  );
}

export default App;
