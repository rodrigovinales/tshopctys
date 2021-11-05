import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logoNav from "../img/LOGO.png"


const NavComponent = () => {
  return (

    <div className="contenedorNav">
      <img src={logoNav} className="logoNav" alt="logoNav"/>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav nav-pills mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="./index.html">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/productos.html">PRODUCTOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./pages/contacto.html">CONTACTO</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>

  )
}

export default NavComponent;