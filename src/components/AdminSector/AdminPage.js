import React, { useState } from "react";
import { useCollection } from "../../hooks/useCollection";
import { collection, addDoc, Timestamp, writeBatch, doc, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../../Firebase/Config";
import { Form, FloatingLabel } from "react-bootstrap";
import Swal from 'sweetalert2';


const AdminPage = () => {

    const [type, setType] = useState('TECLADOS');
    const { productos: productos } = useCollection("productos")
    const [values, setValues] = useState({

        nombre: "",
        precio: "",
        categoria: "",
        stock: "",
        descripcion: "",
        tamano: "",
        compatibilidad: "",
        conexion: "",
        imagen: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value, type
        })
    }

    const handleSubmitDelete = (e) => {
        if (values.id !== "null") {
            Swal.fire({
                title: 'Esta seguro de eliminar el producto?',
                text: "Esta accion no es reversible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Producto eliminado!',
                        text: 'No aparecera en la lista.',
                        icon: 'success',
                        timer: 1500
                    })
                    deleteDoc(doc(db, "productos", values.id));
                }
            })
        } else {
            alert("DEBE SELECCIONAR UN PRODUCTO PARA ELIMINAR")
        }


    }
    const handleSubmitPrimary = (e) => {
        e.preventDefault()

        productos.filter(element => {
            if (values.id === "null") {
                setValues({
                    nombre: "",
                    precio: "",
                    categoria: "",
                    stock: "",
                    descripcion: "",
                    tamano: "",
                    compatibilidad: "",
                    conexion: "",
                    imagen: ""
                })
            }
            if (values.id === element.id) {
                setValues({
                    id: element.id,
                    nombre: element.nombre,
                    precio: element.precio,
                    categoria: element.categoria,
                    stock: element.stock,
                    descripcion: element.descripcion,
                    tamano: element.tamano,
                    compatibilidad: element.compatibilidad,
                    conexion: element.conexion,
                })
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const addItem = {
            nombre: (values.nombre).toUpperCase(),
            categoria: (type).toUpperCase(),
            precio: values.precio,
            imagen: e.target.imagen.files[0].name,
            stock: values.stock,
            descripcion: (values.descripcion).toUpperCase(),
            compatibilidad: (values.compatibilidad).toUpperCase(),
            conexion: (values.conexion).toUpperCase(),
            tamano: values.tamano,
            date: Timestamp.fromDate(new Date())
        }
        const modifyItem = {
            nombre: (values.nombre).toUpperCase(),
            categoria: (type).toUpperCase(),
            precio: values.precio,
            stock: values.stock,
            imagen: e.target.imagen.files[0].name,
            descripcion: (values.descripcion).toUpperCase(),
            compatibilidad: (values.compatibilidad).toUpperCase(),
            conexion: (values.conexion).toUpperCase(),
            tamano: values.tamano,
            date: Timestamp.fromDate(new Date())
        }
        const updateItem = () => {
            const modificaItem = doc(db, "productos", values.id)
            updateDoc(modificaItem, modifyItem)
            Swal.fire({
                title: 'Producto modificado',
                timer: 2000,
                icon: 'success'
            })
        }

        Swal.fire({
            title: 'Producto agregado al stock',
            timer: 2000,
            icon: 'success'
        })

        if (values.id) {
            updateItem()
        }
        else {
            const batch = writeBatch(db)
            const addProductos = collection(db, "productos")
            addDoc(addProductos, addItem)
            batch.commit()
        }
    }

    return (
        <>
            <form onSubmit={handleSubmitPrimary}>
                <Form.Select
                    className="me-sm-2"
                    id="inlineFormCustomSelect"
                    name="id"
                    type="text"
                    onChange={handleInputChange}
                >
                    <option value="null">Ingresar Producto Nuevo</option>
                    {productos.map(e => (
                        <option value={e.id} key={e.id}>{`Nombre Producto: ${e.nombre} **** CATEGORIA: ${e.categoria}`}  </option>))}
                </Form.Select>
                <button type='submit' className='btn btn-info my-2'>LLENAR / LIMPIAR CAMPOS</button>
            </form>

            <button type='submit' onClick={handleSubmitDelete} className='btn btn-danger btn-sm my-2'>ELIMINAR PRODUCTO</button>

            <form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Nombre del Producto"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="nombre"
                        type="text"
                        value={values.nombre}
                        placeholder="NOMBRE DEL PRODUCTO" />
                </FloatingLabel>

                <Form.Group controlId="formBasicSelect">
                    <Form.Label className="btn btn-success btn-sm disabled">SELECCIONAR CATEGORIA</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={e => {
                            setType(e.target.value);
                        }}
                        value={type}
                    >
                        {/* TAG IMPRESION  */}
                        <option value="IMPRESORAS">IMPRESORAS</option>
                        <option value="TONERS">TONERS</option>
                        <option value="CARTUCHOS EPSON">CARTUCHOS EPSON</option>
                        <option value="CARTUCHOS HP">CARTUCHOS HP</option>
                        <option value="CARTUCHOS ALTERNATIVOS">CARTUCHOS ALTERNATIVOS</option>
                        <option value="BOTELLAS DE TINTA">BOTELLAS DE TINTA</option>
                        <option value="RESMAS">RESMAS</option>

                        {/* TAG COMPONENTES */}
                        <option value="DISCOS RIGIDOS">DISCOS RIGIDOS</option>
                        <option value="FUENTES">FUENTES</option>
                        <option value="GABINETES">GABINETES</option>
                        <option value="MOTHERBOARDS">MOTHERBOARDS</option>
                        <option value="PROCESADORES">PROCESADORES</option>
                        <option value="PLACAS DE VIDEO">PLACAS DE VIDEO</option>
                        <option value="MEMORIAS">MEMORIAS</option>

                        {/* TAG PERIFERICOS */}
                        <option value="WEBCAM">WEBCAM</option>
                        <option value="TECLADOS">TECLADOS</option>
                        <option value="MOUSES">MOUSES</option>

                        {/* TAG ALMACENAMIENTO */}
                        <option value="DISCOS EXTERNOS">DISCOS EXTERNOS</option>
                        <option value="PENDRIVES">PENDRIVES</option>
                        <option value="CD-DVD-BLURAY">CD-DVD-BLURAY</option>

                        {/* TAG CONECTIVIDAD */}
                        <option value="ROUTERS">ROUTERS</option>
                        <option value="PLACA DE RED">PLACA DE RED</option>
                        <option value="CONEXION INALAMBRICA">CONEXION INALAMBRICA</option>

                        {/* TAG MONITORES*/}
                        <option value="MONITORES">MONITORES</option>

                        {/* TAG AUDIO */}
                        <option value="PARLANTES">PARLANTES</option>
                        <option value="AURICULARES">AURICULARES</option>
                        <option value="MICROFONOS">MICROFONOS</option>

                    </Form.Control>
                </Form.Group>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Descripcion del Producto"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="descripcion"
                        type="text"
                        value={values.descripcion}
                        placeholder="DESCRIPCION DEL PRODUCTO" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Compatibilidad"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="compatibilidad"
                        type="text"
                        value={values.compatibilidad}
                        placeholder="COMPATIBILIDAD" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Conexion"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="conexion"
                        type="text"
                        value={values.conexion}
                        placeholder="CONEXION" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Tamaño / Dimensiones"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="tamano"
                        type="text"
                        value={values.tamano}
                        placeholder="TAMAÑO" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Cantidad"
                    className="my-2"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="stock"
                        type="number"
                        value={values.stock}
                        min="0"
                        max="200"
                        placeholder="Cantidad" />
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Precio en u$s -- Recuerde ingresar precio en Dólares !!"
                    className="my-2 dollar"
                >
                    <Form.Control
                        onChange={handleInputChange}
                        name="precio"
                        type="float"
                        value={values.precio}
                        min="0"
                        placeholder="Precio en u$s"
                         />
                </FloatingLabel>

                <Form.Group controlId="formFile">
                    <Form.Label>Seleccione de imagen para el producto</Form.Label>
                    <Form.Control
                        name="imagen"
                        type="file"
                        required
                        onChange={handleInputChange}
                        value={values.imagen}
                        className="mb-3" />
                </Form.Group>
                <br />
                <button type='submit' className='btn btn-success'>AGREGAR / MODIFICAR</button>
            </form>
        </>
    )
}

export default AdminPage;