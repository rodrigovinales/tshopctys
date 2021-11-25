import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemlistContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ComponenteFooter from "./components/ComponenteFooter";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio"



import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        

        <NavBar />
        <Routes>
          <Route path="/" exact element={<Inicio />}/>
          <Route path="/productos" element={ <ItemlistContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <hr />

        <ComponenteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
