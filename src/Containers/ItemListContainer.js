import React, { useState, useEffect } from 'react';
// import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(() => {
        fetch("./inventario.json")
          .then(res => res.json())
        .then(datos => {
              setProductos(datos);
            })
            .catch(err => console.log("el Error es el siguiente", err))
        }, 3000);
      }, [])
    
  return <>
    {/* <ItemCount stock={7} inicioCont={1} /> */}

    <ItemList items={productos} />


  </>
}



export default ItemListContainer;
