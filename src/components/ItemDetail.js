import React, { useContext } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import ItemCount from "../components/ItemCount";
import { CartContext } from "../components/Context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'



const ItemDetail = ({ categoria, imagen, precio, nombre, stock, id }) => {

    const [cantidad, setCantidad] = useState(1)
    // const [agregado, setAgregado] = useState(false)
    const MySwal = withReactContent(Swal)

    const { addToCart, itemRepetido } = useContext(CartContext)

    const handleAddProd = () => {
        if (cantidad >= 1) {
            const nuevoItem = { id, cantidad, nombre, precio, categoria, imagen }
            addToCart(nuevoItem)

            MySwal.fire({
                title: <strong>Producto Agregado !! </strong>,
                text: `CANTIDAD: ${cantidad}`,
                icon: 'success',
                imageUrl: `${process.env.PUBLIC_URL}/productos/${imagen}`,
                imageWidth: 200,
                imageHeight: 200,
                timer: 2000
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
        <div className="stylingItemDetail">
            <div className="card stylingCard_ItemDetail">
                <h6 className="stylingCard_h6">CATEGORIA: {categoria}</h6>
                <img src={`${process.env.PUBLIC_URL}/productos/${imagen}`} className="card-img-top" alt="" />
                <p className="card-title">{nombre}</p>
                <div className="card-body">
                    <h4 className="btn btn-sm btn-success disabled"> Precio</h4>
                    <br />
                    <span className="btn disabled">u$s {precio}</span>
                </div>
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
    )
}
export default ItemDetail;
