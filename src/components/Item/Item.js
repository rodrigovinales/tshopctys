import React from "react";

const Item = ({ categoria, imagen, nombre, precio }) => {
    return (
        <div className="list_products">
            <div className="card" style={{ width: 288 }}>
                <h6>CATEGORIA: {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <h2 className="card-title">{nombre}</h2>
                <div className="card-body">
                    <h4> Precio u$s {precio} </h4>
                </div>
            </div>
            </div>
    )
}
export default Item;
