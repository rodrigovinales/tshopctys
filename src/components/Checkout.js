import { collection, getDocs, query, where, addDoc, Timestamp, writeBatch, documentId } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { db } from "../Firebase/Config";
import { CartContext } from "./Context/CartContext";
import { Link } from 'react-router-dom'

export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarritoLuegodeCompra } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 3 || values.email.length < 4 || values.telefono.length < 4) {
            alert("Complete el formulario correctamente")
            return
        }

        const order = {
            buyer: values,
            items: carrito,
            total: calcularTotal(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", carrito.map(el => el.id)))

        const outOfStock = []

        getDocs(q)
            .then((res) => {
                res.docs.forEach((doc) => {
                    const itemInCart = carrito.find((prod) => prod.id === doc.id)
                    if (doc.data().stock >= itemInCart.cantidad) {
                        batch.update(doc.ref, {
                            stock: doc.data().stock - itemInCart.cantidad
                        })
                    }
                    else {
                        outOfStock.push(itemInCart)
                    }
                })
                if (outOfStock.length === 0) {
                    addDoc(ordersRef, order)
                        .then((res) => {
                            batch.commit()
                            setOrderId(res.id)
                            vaciarCarritoLuegodeCompra()
                        })
                }
                else {
                    alert("Hay productos en Faltantes " + outOfStock.map(el => el.nombre).join(", "))
                }
            })
    }

    return (
        <div className="container my-5">

            {
                orderId
                    ? <>
                        <h4>Hola {values.nombre}.</h4>
                        <p>Tu compra se registró con el siguiente codigo {orderId}</p>
                        <hr />
                        <Link to="/" className="btn btn-warning"> Volver a Inicio</Link>
                    </>

                    :
                    <>
                        <h1>DATOS PARA LA COMPRA</h1>
                        <hr />
                        <form onSubmit={handleSubmit}>
                            <input
                                name="nombre"
                                onChange={handleInputChange}
                                className="form-control my-2"
                                type="text"
                                value={values.nombre}
                                placeholder="Ingrese Nombre" />
                            <input
                                name="email"
                                onChange={handleInputChange}
                                className="form-control my-2"
                                type="text"
                                value={values.email}
                                placeholder="Ingrese Email" />
                            <input
                                name="telefono"
                                onChange={handleInputChange}
                                className="form-control my-2"
                                type="number"
                                value={values.telefono}
                                placeholder="Ingrese Telefono" />
                            <button type="submit" className="btn btn-dark">ENVIAR DATOS PARA LA COMPRA</button>
                        </form>
                    </>
            }
        </div>
    )
}
