import React from "react";
import { Link } from "react-router-dom"

const Item = ({ categoria, imagen, nombre, precio, id }) => {
    return (
        <div className="list_products">
            <div key={id} className="card" style={{ width: 288 }}>
                <h6>CATEGORIA: {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <h2 className="card-title">{nombre}</h2>
                <div className="card-body">
                    <h4 className="btn btn-sm btn-outline-danger disabled" > Precio u$s {precio} </h4>
                </div>
                <Link to={`/detalle/${id}`} className="btn btn-success btn-sm">VER DETALLE</Link>
                <Link to={id} className="btn btn-warning btn-sm">COMPRAR</Link>
            </div>
        </div>
    )
}
export default Item;
