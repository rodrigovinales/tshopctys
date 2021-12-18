import React from 'react';
import logoNav from "../img/LOGO.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import ModalLogin from './ModalLogin';

const NavComponent = () => {

  const { logged, logout, user } = useContext(UserContext)

  return (

    <header className="App-header">
      <Link to="/"><img src={logoHeader} className="logoHeader col-6" alt="logoHeader" /></Link>
      <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logoNav} className="logoNav" alt="logoNav" /> {' '}
        </Navbar.Brand>
        <Nav>
          <NavLink className="dropdown-item" to="/">INICIO</NavLink>
          <NavLink className="dropdown-item" to="/productos/">PRODUCTOS</NavLink>
          <NavDropdown title="CATEGORIAS" id="navbarScrollingDropdown">
            <NavLink className="dropdown-item" to="/productos/MOUSE">MOUSE</NavLink>
            <NavLink className="dropdown-item" to="/productos/TECLADOS">TECLADOS</NavLink>
            <NavLink className="dropdown-item" to="/productos/ALMACENAMIENTO">ALMACENAMIENTO</NavLink>
            <NavLink className="dropdown-item" to="/productos/ROUTER">ROUTER</NavLink>
            <NavLink className="dropdown-item" to="/productos/PARLANTES">PARLANTES</NavLink>
            <NavDropdown.Divider />
            <NavDropdown.Item>OFERTAS</NavDropdown.Item>
          </NavDropdown>
          <NavLink className="dropdown-item" to="/contacto">CONTACTO</NavLink>
          <Link to="cart"><CartWidget /></Link>          
          {
            logged
              ?
              <NavLink className="dropdown-item" to="/RutaAdmin">ADMIN</NavLink>
              :
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalLogin">LOGIN</button>
          }

        </Nav>
        {
          logged
          ?
          <>
              <span style={{ 
                color: "black", 
                fontSize: 16,
                
                
              }}>Bienvenido {user.email}, ya tiene habilitada la seccion ADMIN</span>
              <button type="button" className="btn btn-primary mx-3" onClick={logout}>Logout</button>
            </>
            :
            <></>
          }
      </Navbar>
      <ModalLogin />
    </header>
  )
}


export default NavComponent;

