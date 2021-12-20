import React, { useState } from "react";
import { useParams } from 'react-router';
import { useCollection } from "../../hooks/useCollection";
import { collection, getDocs, query, where, addDoc, Timestamp, writeBatch, documentId } from "firebase/firestore/lite";
import { db } from "../../Firebase/Config";
import { Form } from "react-bootstrap"


const AdminPage = () => {


    const { catId } = useParams();
    const { productos: productos } = useCollection("productos", catId)
    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: "",
        precio: "",
        categoria: "",
        stock: "",
        descripcion: "",
        tamano:"",
        compatibilidad:"",
        conexion:""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const addItem = {
            nombre: values.nombre.toUpperCase(),
            categoria: (values.categoria).toUpperCase(),
            precio: values.precio,
            imagen: e.target.imagen.files[0].name,
            stock: values.stock,
            descripcion: values.descripcion.toUpperCase(),
            compatibilidad: values.compatibilidad.toUpperCase(),
            conexion:values.conexion.toUpperCase(),
            tamano:values.tamano,
            date: Timestamp.fromDate(new Date())
        }
        console.log(addItem)
        console.log(e.target.imagen.files[0].name)
        const batch = writeBatch(db)
        const addProductos = collection(db, "productos")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", productos.map(el => el.id)))

        getDocs(q)
            .then((res) => {

                addDoc(addProductos, addItem)
                    .then((res) => {
                        batch.commit()
                        setOrderId(res.id)
                    })
            })
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    className='form-control my-2'
                    type="text"
                    placeholder="NOMBRE PRODUCTO"
                />

                <input
                    name='categoria'
                    onChange={handleInputChange}
                    value={values.categoria}
                    className='form-control my-2'
                    type="text"
                    placeholder="CATEGORIA"
                />
                <input
                    name='descripcion'
                    onChange={handleInputChange}
                    value={values.descripcion}
                    className='form-control my-2'
                    type="text"
                    placeholder="DESCRIPCION"
                />
                <input
                    name='compatibilidad'
                    onChange={handleInputChange}
                    value={values.compatibilidad}
                    className='form-control my-2'
                    type="text"
                    placeholder="COMPATIBILIDAD"
                />
                <input
                    name='conexion'
                    onChange={handleInputChange}
                    value={values.conexion}
                    className='form-control my-2'
                    type="text"
                    placeholder="CONEXION"
                />
                <input
                    name='tamano'
                    onChange={handleInputChange}
                    value={values.tamano}
                    className='form-control my-2'
                    type="text"
                    placeholder="TAMAÑO"
                />
                <input
                    name='stock'
                    onChange={handleInputChange}
                    value={values.stock}
                    className='form-control my-2'
                    type="number"
                    placeholder="CANTIDAD DE PRODUCTOS"
                />

                <input
                    name='precio'
                    onChange={handleInputChange}
                    value={values.precio}
                    className='form-control my-2'
                    type="number"
                    placeholder="PRECIO"
                />

                <Form.Group controlId="formFile">
                    <Form.Label>Seleccion de imagen para el producto</Form.Label>
                    <Form.Control
                        name="imagen"
                        type="file"
                        onChange={handleInputChange}
                        value={values.imagen}
                        className="mb-3" />
                </Form.Group>
                <br />
                <button type='submit' className='btn btn-success'>Enviar</button>
            </form>


            <div className="container mt-5" align="center">
                <h4>Lista de Productos</h4>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Imagen</th>

                                </tr>
                            </thead>
                            <tbody>
                                {productos.map(e => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.nombre}</td>
                                        <td>{e.stock} Unidades</td>
                                        <td>$ {e.precio}</td>
                                        <td><img src={`${process.env.PUBLIC_URL}/productos/${e.imagen}`} alt={e.nombre} width="50px" className="img-fluid" /></td>
                                    </tr>
                                    
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage;