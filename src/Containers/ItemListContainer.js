import React, { useState, useEffect } from 'react';
// import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList/ItemList";
import GetDatos from "../helpers/GetDatos"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(() => {
        GetDatos()
        .then(datos => {
              setProductos(datos);
            })
            .catch(err => console.log("el Error es el siguiente", err))
        },);
      }, [])
    
  return <>
    {/* <ItemCount stock={7} inicioCont={1} /> */}

    <ItemList items={productos} />


  </>
}



export default ItemListContainer;
