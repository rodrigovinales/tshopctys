import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../components/ItemCount";

const ItemDetail = ({ categoria, imagen, precio, nombre, stock, id }) => {

    const [cantidad, setCantidad] = useState(1)
    const [agregado, setAgregado] = useState(false)

    const agregoProducto = () => {
        if (cantidad >= 1) {
            console.log('Agregado!!', {id, cantidad, nombre, precio, categoria})
            setAgregado(true)
        }   
        else {
            alert("No puedes comprar " + cantidad + " items");
        }
    }


    return (
        <div className="stylingItemDetail">
            <div className="card stylingCard_ItemDetail">
                <h6 className="stylingCard_h6">CATEGORIA: {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <p className="card-title">{nombre}</p>
                <div className="card-body">
                <h4 className="btn btn-sm btn-success disabled"> Precio</h4>
                    <br/>
                    <span className="btn disabled">u$s {precio}</span>
                </div>
                    <button className="btn btn-outline-primary disabled"> STOCK DISPONIBLE: {stock}</button>
                {
                !agregado 
                ?   <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={agregoProducto} />
                :   <Link to="/cart" className="btn btn-success">Finalizar la compra</Link>
            }
                <Link to="/Productos" className="btn btn-info"> VOLVER </Link>
            </div>
        </div>
    )
}
export default ItemDetail;
