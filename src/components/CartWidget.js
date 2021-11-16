import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

   return (
      <div>
         <FontAwesomeIcon icon={faShoppingBasket} className="styloCarrito" />
      </div>
   )

}
export default CartWidget;
