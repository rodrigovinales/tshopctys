import React, { useEffect, useState } from "react";
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
import { CartContext } from "./components/Context/CartContext"

function App() {

  const init = JSON.parse(localStorage.getItem('carrito')) || []

  const [carrito, setCarrito] = useState(init)
  console.log(carrito)

  const addToCart = (item) => {
    setCarrito([...carrito, item])
  }

  const removeItem = (itemId) => {
    const newCarrito = carrito.filter((prod) => prod.id !== itemId)
    setCarrito(newCarrito)
  }

  const calcularCantidad = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
  }

  const itemRepetido = (itemId) => {
    return carrito.some((prod) => prod.id === itemId)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])



  return (

    <CartContext.Provider value={{ carrito, addToCart, removeItem, calcularCantidad, vaciarCarrito, itemRepetido, calcularTotal }}>

      <BrowserRouter>
        <div className="container-fluid">
          <NavBar />
          <hr />
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/productos" element={<ItemlistContainer />} />
            <Route path="/productos/:catId" element={<ItemlistContainer />} />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <hr />
          <ComponenteFooter />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
