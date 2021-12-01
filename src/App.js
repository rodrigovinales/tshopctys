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
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavBar />
        <hr/>
        <Routes>
          <Route path="/" exact element={<Inicio />}/>
          <Route path="/productos" element={ <ItemlistContainer /> }/>
          <Route path="/productos/:catId" element={ <ItemlistContainer /> }/>
          <Route path="/detalle/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/cart" element= { <Cart /> } />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <hr />
        <ComponenteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
