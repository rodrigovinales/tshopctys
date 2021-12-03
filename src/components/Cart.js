import React, { useContext } from "react";
import { CartContext } from "../components/Context/CartContext"



const Cart = () => {

    const { carrito, vaciarCarrito, removeItem } = useContext(CartContext)

    return (
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
                                    <td><button className="btn btn-sm btn-warning" onClick={() => removeItem(e.id)}>QUITAR</button></td>
                                </tr>

                            ))}
                            <button className="btn btn-danger" onClick={vaciarCarrito}>VACIAR CARRITO</button>
                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )

}

export default Cart;


