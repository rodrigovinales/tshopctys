import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import dollar from "../data/Productos"

import "../Css/ItemDetail.css"

const ItemDetail = ({ categoria, imagen, precio, nombre, descripcion, tamano, compatibilidad, conexion }) => {

    const back = () => {
        window.history.back();
    }

    return (
        <div className="container">
            <div className="stylingItemDetail">
                <div className="card stylingCard_ItemDetail">
                    <h6>CATEGORIA: {categoria}</h6>
                    <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="imgItemDetail" alt="" />
                    {/* <p className="card-title">{nombre}</p> */}
                </div>
                <div className="container">
                    <div className="detalleProducto">
                        <h1 className="hOneItemDet">{nombre}</h1>
                        <p className="pStyling">Lo que tenés que saber de este producto</p>
                        <ul className="descripcionFont">
                            <li>
                                <p> - {descripcion}</p>
                            </li>
                            <li>
                                {tamano ? <p> - DIMENSIONES: {tamano}</p> : null}
                            </li>
                            <li>
                                {compatibilidad ? <p> - COMPATIBILIDAD: {compatibilidad} </p> : null}
                            </li>
                            <li>
                                {conexion ? <p> - CONEXION: {conexion} </p> : null}
                            </li>
                        </ul>
                        <hr />
                        <div className="stylingShop">
                            {/* <Button
                                variant="outline-secondary"
                                size="lg">
                                STOCK DISPONIBLE
                            </Button> */}
                            <Button
                                variant="btn btn-secondary disabled"
                            >
                                <p className="precioBig">$ {precio*dollar.toFixed(2)}</p>
                                <p className="titleSmall">IVA INCLUIDO</p>
                            </Button>
                            <hr />
                            <Link to="/" className="m-1 btn btn-info btn-sm"> IR A INICIO </Link>
                            <button className="btn btn-sm btn-danger" onClick={back}> VOLVER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;
