import React from 'react';
// import logoNav from "../img/LOGO.png";
import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logoHeader from "../img/LOGOshopcomputers.png";
import "../Css/NavBar.css";
import ModalLogin from './ModalLogin';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const NavComponent = () => {

  const { logged, logout } = useContext(UserContext)

  return (
<>
    <header className="App-header">
      <Link to="/"><img src={logoHeader} className="logoHeader col-6" alt="logoHeader" /></Link>
      </header>
      <Navbar expand="sm" collapseOnSelect>

        <Nav>
          <Button
            variant="secondary"
            className="d-inline mx-1"
            size="sm"
            href="/" title="INICIO">INICIO
          </Button>

          <Button
            variant="secondary"
            className="d-inline mx-1"
            size="sm"
            href="/productos" title="TODOS LOS PRODUCTOS">TODOS LOS PRODUCTOS
          </Button>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            variant="secondary"
            size="sm"
            title="IMPRESION">
            <div className="probando">
              <Dropdown.Item href="/productos/IMPRESORAS">IMPRESORAS</Dropdown.Item>
              <Dropdown.Item href="/productos/TONERS">TONERS</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS EPSON">CARTUCHOS EPSON</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS HP">CARTUCHOS HP</Dropdown.Item>
              <Dropdown.Item href="/productos/CARTUCHOS ALTERNATIVOS">CARTUCHOS ALTERNATIVOS</Dropdown.Item>
              <Dropdown.Item href="/productos/BOTELLAS TINTA">BOTELLAS DE TINTA</Dropdown.Item>
              <Dropdown.Item href="/productos/RESMAS">RESMAS</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            variant="secondary"
            id="dropdown-basic-button"
            size="sm"
            title="COMPONENTES">
            <div className='probando'>
              <Dropdown.Item href="/productos/DISCOS RIGIDOS">DISCOS RIGIDOS</Dropdown.Item>
              <Dropdown.Item href="/productos/FUENTES">FUENTES</Dropdown.Item>
              <Dropdown.Item href="/productos/GABINETES">GABINETES</Dropdown.Item>
              <Dropdown.Item href="/productos/MOTHERBOARDS">MOTHERBOARDS</Dropdown.Item>
              <Dropdown.Item href="/productos/PROCESADORES">PROCESADORES</Dropdown.Item>
              <Dropdown.Item href="/productos/PLACAS DE VIDEO">PLACAS DE VIDEO</Dropdown.Item>
              <Dropdown.Item href="/productos/MEMORIAS">MEMORIAS</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="PERIFERICOS"
            size="sm"
            variant="secondary">
            <div className='probando'>
              <Dropdown.Item href="/productos/WEBCAM">WEBCAM</Dropdown.Item>
              <Dropdown.Item href="/productos/TECLADOS">TECLADOS</Dropdown.Item>
              <Dropdown.Item href="/productos/MOUSES">MOUSES</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="ALMACENAMIENTO"
            size="sm"
            variant="secondary">
            <div className='probando'>

              <Dropdown.Item href="/productos/DISCOS EXTERNOS">DISCOS EXTERNOS</Dropdown.Item>
              <Dropdown.Item href="/productos/PENDRIVES">PENDRIVES</Dropdown.Item>
              <Dropdown.Item href="/productos/CD-DVD-BLURAY">CD-DVD-BLURAY</Dropdown.Item>
            </div>
          </DropdownButton>

          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            title="CONECTIVIDAD"
            size="sm"
            variant="secondary">
            <div className='probando'>

              <Dropdown.Item href="/productos/ROUTERS">ROUTERS</Dropdown.Item>
              <Dropdown.Item href="/productos/PLACA DE RED">PLACA DE RED</Dropdown.Item>
              <Dropdown.Item href="/productos/CONEXION INALAMBRICA">CONEXION INALAMBRICA</Dropdown.Item>
            </div>
          </DropdownButton>


          <DropdownButton
            className="d-inline mx-1"
            id="dropdown-basic-button"
            size="sm"
            title="AUDIO"
            variant="secondary">
            <div className='probando'>
              <Dropdown.Item href="/productos/PARLANTES">PARLANTES</Dropdown.Item>
              <Dropdown.Item href="/productos/AURICULARES">AURICULARES</Dropdown.Item>
              <Dropdown.Item href="/productos/MICROFONOS">MICROFONOS</Dropdown.Item>
            </div>
          </DropdownButton>

          <Button
            className="d-inline mx-1"
            href="/productos/MONITORES"
            size="sm"
            variant="secondary"
            title="MONITORES">MONITORES
          </Button>

          <Button
            className="d-inline mx-1"
            href="/contacto"
            size="sm"
            variant="secondary"
            title="CONTACTO">CONTACTO
          </Button>
          {
            logged
              ?
              <NavLink className="btn btn-success btn-sm" to="/RutaAdmin">ADMIN</NavLink>
              :
              <button type="button" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalLogin">LOGIN</button>
          }
        </Nav>
        {
          logged
            ?
            <>
              {/* <span style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Montserrat",
              }}>Habilitada seccion ADMIN</span> */}
              <button type="button" className="btn btn-primary btn-sm" onClick={logout}>Logout</button>
            </>
            :
            <p style={{ color: "black", fontSize: 12, fontWeight: 700, fontFamily: "Montserrat", marginLeft: 5 }}></p>
        }
      </Navbar>
      <ModalLogin />
      </>
    
  )
}


export default NavComponent;

