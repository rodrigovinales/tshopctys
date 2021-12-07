import React, { useEffect, useState, createContext } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const init = JSON.parse(localStorage.getItem('carrito')) || []

    const [carrito, setCarrito] = useState(init)

    const agregoACarrito = (item) => {
        setCarrito([...carrito, item])
    }

    const removeItem = (itemId) => {
        const newCarrito = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCarrito)
        Swal.fire({
            title:'Producto eliminado',
            timer: 1500,
            icon: 'success'
        })
    }

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

    const itemRepetido = (itemId) => {
        return carrito.some((prod) => prod.id === itemId)
    }

    const vaciarCarrito = () => {
        if (carrito.length !== 0) {
            Swal.fire({
                title: 'Esta seguro de vaciar carrito?',
                text: "Esta accion no es reversible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Elementos de carrito eliminados!',
                        text: 'El carrito esta vacio.',
                        icon: 'success',
                        timer: 1500
                    })
                    setCarrito([])
                }
            })
        }
        else {
            Swal.fire({
                title:'No hay productos en carrito',
                timer: 1500,
                icon: 'error'
            })
        }
    }

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])



    return (
        <CartContext.Provider value={{ carrito, agregoACarrito, removeItem, calcularCantidad, vaciarCarrito, itemRepetido, calcularTotal }}>
            {children}
        </CartContext.Provider>
    )
}