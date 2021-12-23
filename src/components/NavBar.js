import React from 'react';
import logoNav from "../img/LOGO.png";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import ModalLogin from './ModalLogin';
import { useCollection } from '../hooks/useCollection';

const NavComponent = () => {

  const { logged, logout } = useContext(UserContext)
  const { productos: productos } = useCollection("productos")

  const listadoCategorias = productos.reduce((acc, item) => {
    if (!acc.includes(item.categoria)) {
      acc.push(item.categoria);
    }
    return acc;
  }, [])

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
            {listadoCategorias.map(e => (
              <div key={e}>
                <NavLink className="dropdown-item" to={`/productos/${e}`}>{e}</NavLink>
              </div>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item className='disabled'>OFERTAS - PROXIMAMENTE</NavDropdown.Item>
          </NavDropdown>
          <NavLink className="dropdown-item" to="/contacto">CONTACTO</NavLink>
          <Link to="cart" style={{ textDecoration: 'none' }}><CartWidget /></Link>
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
                fontSize: 14,
              }}>Habilitada seccion ADMIN</span>
              <button type="button" className="btn btn-primary mx-3" onClick={logout}>Logout</button>
            </>
            :
            <p style={{ color: "black", fontSize: 12, fontWeight: 700, fontFamily: "Montserrat", marginLeft: 5 }}>ACCESO A PERSONAL</p>
        }
      </Navbar>
      <ModalLogin />
    </header>
  )
}

export default NavComponent;

