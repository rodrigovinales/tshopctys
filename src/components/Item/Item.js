import React from "react";
import { Link } from "react-router-dom"

const Item = ({ categoria, imagen, nombre, precio, id }) => {
    return (
        <div className="list_products">
            <div key={id} className="card stylingCard">
                <h6 className="stylingCard stylingCard_h6">CATEGORIA {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="imagen" />
                <p className="card-title">{nombre}</p>
                <div className="card-body">
                    <h4 className="btn btn-sm btn-outline-danger disabled"> Precio u$s {precio} </h4>
                </div>
                <Link to={`/detalle/${id}`} className="btn btn-success btn-sm">VER DETALLE</Link>
            </div>
        </div>
    )
}
export default Item;
