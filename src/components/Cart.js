import React, { useContext } from "react";
import { CartContext } from "../components/Context/CartContext"
import { Link } from 'react-router-dom'

const Cart = () => {

    const { carrito, vaciarCarrito, removeItem, calcularTotal } = useContext(CartContext)

    return (
        carrito.length === 0
            ?
            <div className="carritoVacioDetail">
                <h2 className="carritoVacioMsg"> CARRITO VACIO</h2>
                <Link to="/Productos" className="btn btn-info"> VOLVER A PRODUCTOS </Link>
            </div>
            :
            <div className="container mt-5" align="center">
                <h4>Lista en carrito</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito.map(e => (
                                    <tr key={e.id}>
                                        <td>{e.nombre}</td>
                                        <td>{e.cantidad}</td>
                                        <td>{e.precio}</td>
                                        <td><img src={`${process.env.PUBLIC_URL}/productos/${e.imagen}`} alt={e.nombre} width="50px" className="img-fluid" /></td>
                                        <td className="botonRemoveItem" onClick={() => removeItem(e.id)}>REMOVER</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className="btn btn-danger" onClick={vaciarCarrito}>VACIAR CARRITO</button>
                        <hr></hr>
                        <h4 className="btn btn-success disabled">PRECIO TOTAL: $ {calcularTotal().toFixed(2)}</h4>
                        <hr/>
                        <Link to="/checkout" className="btn btn-success mx-2">TERMINAR MI COMPRA</Link>
                    </div>
                </div>
            </div>
    )
}

export default Cart;


