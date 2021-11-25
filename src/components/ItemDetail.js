import React from "react";

const ItemDetail = ({ item }) => {
    return (
        <div className="list_products">
            <div className="card" style={{ width: 288 }}>
                <h6>CATEGORIA: {item.categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${item.imagen}`} className="card-img-top" alt="" />
                <p className="card-title">{item.nombre}</p>
                <div className="card-body">
                    <h4 className="btn btn-success"> Precio u$s {item.precio} </h4>
                </div>
                    <button className="btn btn-success btn-sm">COMPRAR</button>
                    <button className="btn btn-warning btn-sm">VER DETALLE</button>
            </div>
        </div>
    )
}
export default ItemDetail;
