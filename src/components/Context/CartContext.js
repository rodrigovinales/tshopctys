import React, { useEffect, useState, createContext } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const init = JSON.parse(localStorage.getItem('carrito')) || []

    const [carrito, setCarrito] = useState(init)
    const [carritoMP, setCarritoMP] = useState(init)

    const agregoACarrito = (item) => {
        setCarrito([...carrito, item])
        setCarritoMP([...carritoMP, item])
    }

    const removeItem = (itemId) => {
        const newCarrito = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCarrito)
        Swal.fire({
            title: 'Producto eliminado',
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
                title: 'No hay productos en carrito',
                timer: 1500,
                icon: 'error'
            })
        }
    }
    
    const finalizarCompra = async () => {
        
        const itemsToMP = carritoMP.map((prod) => {
            return {
                title: prod.nombre,
                description: "",
                picture_url: prod.imagen,
                category_id: "",
                quantity: prod.cantidad,
                currency_id: "ARS",
                unit_price: parseFloat(prod.precio)
            }
        })


        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                Authorization: "Bearer TEST-2881734393029190-102119-0be5bce21ced0437ece41d29c5d99bf0-31032230"
            },
            body: JSON.stringify({
                items: itemsToMP,
                back_urls: {
                    success: window.location.href,
                    failure: window.location.href
                }

            })
        })
        const data = await response.json()
        vaciarCarritoLuegodeCompra()
        window.location.replace(data.init_point)
    }




    useEffect(() => {

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const vaciarCarritoLuegodeCompra = () => {
        setCarrito([])
    }



    return (
        <CartContext.Provider value={{ carrito, agregoACarrito, removeItem, calcularCantidad, vaciarCarrito, itemRepetido, calcularTotal, vaciarCarritoLuegodeCompra, finalizarCompra }}>
            {children}
        </CartContext.Provider>
    )
}