import React from "react";

const Item = ({ categoria, imagen, nombre, precio, id}) => {
    return (
        <div className="list_products">
            <div key={id} className="card" style={{ width: 288 }}>
                <h6>CATEGORIA: {categoria}</h6>
                <p> ID: {id} </p>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <h2 className="card-title">{nombre}</h2>
                <div className="card-body">
                    <h4> Precio u$s {precio} </h4>
                </div>
                <button className="btn btn-primary"> Detalle </button>
            </div>
            </div>
    )
}
export default Item;
