import React from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../components/ItemCount";


const ItemDetail = ({categoria, imagen, precio, nombre }) => {
    return (
        <div className="list_products">
            <div className="card" style={{ width: 288 }}>
                <h6>CATEGORIA: {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <p className="card-title">{nombre}</p>
                <div className="card-body">
                    <h4 className="btn btn-sm btn-outline-danger disabled"> Precio u$s {precio} </h4>
                </div>
                    <ItemCount stock={7} inicioCont={1} />
                    <Link to="/Productos" className="btn btn-info btn-sm"> VOLVER </Link>
            </div>
        </div>
    )
}
export default ItemDetail;
