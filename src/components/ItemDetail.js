import React, { useContext } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../components/ItemCount";
import { CartContext } from "../components/Context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'



const ItemDetail = ({ categoria, imagen, precio, nombre, stock, id, descripcion, tamano, compatibilidad, conexion }) => {
    
    const [cantidad, setCantidad] = useState(1)
    const MySwal = withReactContent(Swal)

    const { agregoACarrito, itemRepetido } = useContext(CartContext)

    const handleAddProd = () => {
        if (cantidad >= 1) {
            const nuevoItem = { id, cantidad, nombre, precio, categoria, imagen }
            agregoACarrito(nuevoItem)

            MySwal.fire({
                title: <strong>Producto Agregado !! </strong>,
                text: `CANTIDAD: ${cantidad}`,
                icon: 'success',
                imageUrl: `${process.env.PUBLIC_URL}/productos/${imagen}`,
                imageWidth: 200,
                imageHeight: 200,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Disculpe...',
                text: 'La cantidad de productos deber ser mayor a 1',
            })
        }
    }

    return (
        <div className="container">
            <div className="stylingItemDetail">
                <div className="card stylingCard_ItemDetail">
                    <h6 className="stylingCard_h6">CATEGORIA: {categoria}</h6>
                    <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                    <p className="card-title">{nombre}</p>
                    <div className="card-body">
                        <span className="btn btn-dark disabled">$ {precio} </span>
                        <p className="titleSmall">IVA NO INCLUIDO</p>
                        <div className="imgItemDetail">
                            <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="imgDetail" alt="" />
                        </div>
                    </div>
                </div>

                <div className="detalleProducto">
                    <h1>{nombre}</h1>
                    <p>Lo que tenés que saber de este producto</p>
                    <ul className="descripcionFont">
                        <li>
                            <p>{descripcion}</p>
                        </li>
                        <li>
                            {tamano === "" ? <p>DIMENSIONES: NO ESPECIFICA</p> : <p>DIMENSIONES: {tamano}</p>}
                        </li>
                        <li>
                            {compatibilidad === "" ? <p>COMPATIBILIDAD: NO ESPECIFICA</p> : <p>COMPATIBILIDAD: {compatibilidad}</p> }
                        </li>
                        <li>
                            {conexion === "" ? <p>CONEXION: NO ESPECIFICA </p> : <p>CONEXION: {conexion}</p>}
                        </li>
                    </ul>
                    <hr/>
                    <div className="stylingShop">
                        <button className="btn btn-outline-primary disabled"> STOCK DISPONIBLE: {stock}</button>
                        {
                            itemRepetido(id)
                                ?
                                <Link to="/cart" className="btn btn-success">Finalizar la compra</Link>
                                :
                                <ItemCount stock={stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={handleAddProd} />
                        }
                        <Link to="/Productos" className="btn btn-info"> VOLVER </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;
