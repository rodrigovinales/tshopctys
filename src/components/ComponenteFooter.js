import React from 'react'
import "../Css/Footer.css";
import afipLogo from "../img/icon/AfipWEB.jpg"
import logo from "../img/LOGOshopcomputers.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const ComponenteFooter = () => {
    const afip = "https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVy329uYT0yMDExNTY2MjYzNl1bdGlwb2RvbWljaWxpbz0wXVtzZWN1ZW5jaWE9MF1bdXJsPWh0dHA6Ly93d3cuZXZpbm11ZWJsZXMuY29tLmFyXX0=";

    return (

        <footer>
            <div className="container-footer-all">
                <div className="container-body">

                    <div className="colum1">
                        <img src={logo} alt="logo" className="imagenEnFooter" />
                        <p>Desde 1997 ShopComputers se dedica a brindar el mejor asesoramiento en la venta de articulos de computacion, equipos, servers, monitores, insumos, notebooks, impresoras, multifunciones, tablets, all in ones, cds, dvds, parlantes, joysticks, volantes, pendrives, routers y mucho mas.</p>
                        <div>
                        <a href={afip} target="_F960AFIPInfo">
                            <img src={ afipLogo } alt="" style={{width:30, height:43, border:0}}/> 
                        </a>
                        </div>
                    </div>
                    <div className="colum2">
                        <h1>Redes Sociales</h1>
                        <div className="footer__row">
                            <a href="https://www.facebook.com/shopcomputers.informatica" target="blank"> <FontAwesomeIcon className="footer__img" icon={faFacebook}/></a>
                            <label>Siguenos en Facebook</label>
                        </div>
                        <div className="footer__row">
                            <a href="https://wa.me/54911433333" target="blank"> <FontAwesomeIcon className="footer__img footer__img--whatsapp" icon={faWhatsapp}/></a>
                            <label>Whatsapp Suc. Moreno</label>
                        </div>
                        <div className="footer__row">
                            <a href="https://wa.me/54911433333" target="blank"> <FontAwesomeIcon className="footer__img footer__img--whatsapp" icon={faWhatsapp}/></a>
                            <label>Whatsapp Suc. Gral. Rodriguez</label>
                        </div>
                    </div>
                    <div className="colum3">
                        <h1>Contacto</h1>
                        <div className="row2">
                            <FontAwesomeIcon className="footer__img" icon={ faBuilding }/>
                            <label>
                                C.M.Joly 2887 <br/> Moreno <br/> Buenos Aires
                            </label>
                            <label>
                                Av.San Martin 152<br/> Gral.Rodriguez <br/> Buenos Aires
                            </label>
                        </div>
                        <div className ="row2">
                            <FontAwesomeIcon className="footer__img" icon= { faPhone } />
                            <label>0237-463-1632 <br/> MORENO</label>
                            <label>0237-484-2342 <br/> GRAL.RODRIGUEZ</label>
                        </div>
                        <div className ="row2">
                            <FontAwesomeIcon className="footer__img" icon={ faEnvelope }/>
                            <label>
                            <a href="mailto:ventas@shopcomputers.com.ar">Mail a Sucursal MORENO</a>
                            </label>
                            <label>
                            <a href="mailto:ventas3@shopcomputers.com.ar">Mail a Sucursal Gral.RODRIGUEZ</a>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className ="container-footer">
                <div className ="footer">
                    <div className ="copyright">
                            © 2021 | <a href="https://github.com/" target="_blank" rel="noreferrer">Rodrigo</a>
                    </div>
                </div>
             </div>
        </footer>

    )
}

export default ComponenteFooter;
