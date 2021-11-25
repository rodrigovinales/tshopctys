import React from 'react';
import logoNav from "../img/LOGO.png";
import { Nav, Navbar } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";



const NavComponent = () => {
  return (

    
    <header className="App-header">
        <Link to="/"><img src={logoHeader} className="logoHeader col-6" alt="logoHeader" /></Link>
        <Navbar expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logoNav} className="logoNav" alt="logoNav" /> {' '}
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Link to="/">INICIO</Link>
              <Link to="/Productos"> PRODUCTOS </Link>
              {/* <NavDropdown title="Productos">
                <NavDropdown.Item href="#productos/monitores">Insumos</NavDropdown.Item>
                <NavDropdown.Item href="#productos/teclados">Teclados</NavDropdown.Item>
                <NavDropdown.Item href="#productos/mouses">Mouses</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#productos/pcnb">Computadoras / Notebooks</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#ofertas">Ofertas</Nav.Link> */}
              <Link to="/contacto">Contacto</Link>
            </Nav>
            <CartWidget />

          </Navbar.Collapse>
        </Navbar>
   
      </header>
  )
}

export default NavComponent;

