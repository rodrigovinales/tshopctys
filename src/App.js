import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemlistContainer from "./Containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./components/Context/CartContext"
import { LoaderProvider } from "./components/Context/LoaderContext";
import ComponenteFooter from "./components/ComponenteFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacto from "./components/Contacto";
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio"
import Cart from "./components/Cart";
import './App.css';
import { Checkout } from "./components/Checkout";



function App() {

  return (

    <LoaderProvider>
      <CartProvider >
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
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
            <hr />
            <ComponenteFooter />
          </div>
        </BrowserRouter>
      </CartProvider>
    </LoaderProvider>
  );
}

export default App;
