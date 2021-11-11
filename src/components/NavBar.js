import React from 'react';
import logoNav from "../img/LOGO.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget';
import ItemlistContainer from "./ItemListContainer";


const NavComponent = () => {
  return (

    <div className="contenedorNav">
      <Navbar expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logoNav} className="logoNav" alt="logoNav" /> {' '}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#index">INICIO</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#productos/monitores">Insumos</NavDropdown.Item>
              <NavDropdown.Item href="#productos/teclados">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="#productos/mouses">Mouses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#productos/pcnb">Computadoras / Notebooks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
          <ItemlistContainer/>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavComponent;