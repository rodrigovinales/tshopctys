import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from "../components/Context/CartContext"


const CartWidget = () => {

   const { calcularCantidad} = useContext(CartContext)

   if (calcularCantidad() === 0 ) {
      return <FaCartPlus className="styloCarritoVacio"/>
   }

   return (
      <div className="styloCarrito">
         <FaCartPlus/>
         <span className='numberCarrito'>{ calcularCantidad() }</span> 
      </div>
   )

}
export default CartWidget;
