import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemList from "../components/ItemList/ItemList";
import GetDatos from "../helpers/GetDatos"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { catId } = useParams();
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
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
        .finally(() => {
          setCargando(false)
        });
    }, 1000)
  }, [catId])

  return <>

    {
      cargando ? <h2 className="animateCargando"></h2> : <ItemList items={productos} />
    }

  </>
}

export default ItemListContainer;
