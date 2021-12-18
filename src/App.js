import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemlistContainer from "./Containers/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./components/Context/CartContext"
import { LoaderProvider } from "./components/Context/LoaderContext";
import ComponenteFooter from "./components/ComponenteFooter";
import Contacto from "./components/Contacto";
import NavBar from './components/NavBar';
import Inicio from "./components/Inicio"
import Cart from "./components/Cart";
import './App.css';
import { Checkout } from "./components/Checkout";
import { UserContextProvider } from "./components/Context/UserContext";
import RutaAdmin from "./components/AdminSector/RutaAdmin";
import AdminPage from "./components/AdminSector/AdminPage";





  function App() {

    return (

      <UserContextProvider>
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
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/RutaAdmin" element={<RutaAdmin> <AdminPage /> </RutaAdmin>} />
                  <Route path="*" element={<h2> 404 . PAGINA NO EXISTENTE</h2>} />
                </Routes>
                <hr />
                <ComponenteFooter />
              </div>
            </BrowserRouter>
          </CartProvider>
        </LoaderProvider>
      </UserContextProvider>
    );
  }

export default App;
