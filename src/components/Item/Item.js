import React from "react";
import { Link } from "react-router-dom"

const Item = ({ categoria, imagen, nombre, precio, id, stock }) => {
    return (
        <div className="list_products">
            <div key={id} className="card stylingCard">
                <h6 className="stylingCard stylingCard_h6">{categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="imagen" />
                <p className="card-title">{nombre}</p>
                <div className="card-body">
                    <span className="btn btn-dark disabled">$ {precio} </span>
                    <p className="titleSmall">IVA NO INCLUIDO</p>
                </div>
                {
                    stock <= 0 ? <button className="btn btn-danger disabled">SIN STOCK</button>
                    :
                    <Link to={`/detalle/${id}`} className="btn btn-success">VER PRODUCTO</Link>
                }
            </div>
        </div>
    )
}
export default Item;
