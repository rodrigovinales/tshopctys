import { collection, getDocs, query, where, addDoc, Timestamp, writeBatch, documentId } from "firebase/firestore/lite";
import React, { useContext, useState } from "react";
import { db } from "../Firebase/Config";
import { CartContext } from "./Context/CartContext";
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'


const initialValues = {
    nombre: "",
    email: "",
    tel: ''
}

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('El nombre es obligatorio')
        .min(4, 'El nombre es demasiado corto')
        .max(30, 'El nombre es demasiado largo'),
    email: Yup.string()
        .required('El E-Mail es obligatorio')
        .max(30, 'El E-Mail es demasiado largo')
        .email('Email inválido'),
    tel: Yup.string()
        .required('El numero telefonico es obligatorio')
        .min(8, 'El número no es válido')
        .max(18, 'El número no es válido')
})


export const Checkout = () => {
    
    const { carrito, calcularTotal, vaciarCarritoLuegodeCompra, finalizarCompra } = useContext(CartContext)
    
    const [orderId, setOrderId] = useState(null)
    

    const handleSubmit = (values) => {

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
                        <p>Tu compra se registró con el siguiente codigo {orderId}</p>
                        <hr />
                        <Link to="/" className="btn btn-warning"> Volver a Inicio</Link>
                        <button onClick={finalizarCompra} className='btn btn-sm btn-info mx-5'>PAGAR CON MERCADOPAGO</button>
                    </>

                    :
                    <>
                        <h1>DATOS PARA LA COMPRA</h1>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={schema}
                            onSubmit={handleSubmit}
                        >
                            {(formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        name="nombre"
                                        onChange={formik.handleChange}
                                        value={formik.values.nombre}
                                        className='form-control my-2'
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                    {formik.errors.nombre && <p className='btn btn-warning'>{formik.errors.nombre}</p>}

                                    <input
                                        name='email'
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className='form-control my-2'
                                        type="email"
                                        placeholder="Email"
                                    />
                                    {formik.errors.email && <p className='btn btn-warning'>{formik.errors.email}</p>}

                                    <input
                                        name='tel'
                                        onChange={formik.handleChange}
                                        value={formik.values.tel}
                                        className='form-control my-2'
                                        type="tel"
                                        placeholder="Teléfono"
                                    />
                                    {formik.errors.tel && <p className='btn btn-warning'>{formik.errors.tel}</p>}
                                    <br />
                                    <button type='submit' className='btn btn-success'>Enviar</button>
                                </form>
                            )}
                        </Formik>
                    </>
            }
        </div>
    )
}
