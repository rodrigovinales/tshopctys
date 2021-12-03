import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from "../components/Context/CartContext"


const CartWidget = () => {

   const { calcularCantidad} = useContext(CartContext)

   return (
      <div>
         <FaCartPlus className="styloCarrito"/>
         <span>{ calcularCantidad() }</span>
      </div>
   )

}
export default CartWidget;
