import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from "../components/ItemList/ItemList";
import GetDatos from "../helpers/GetDatos"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { catId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      GetDatos()
        .then(datos => {

          if (!catId) {
            setProductos(datos)
          } else {
            setProductos(datos.filter(prod => prod.categoria === catId))
          }
        })
        .catch(err => console.log("el Error es el siguiente", err))
    });
  }, [catId])

  return <>

    <ItemList items={productos} />
  </>
}

export default ItemListContainer;
