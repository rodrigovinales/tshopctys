import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from 'react-router'
import GetDatos from "../helpers/GetDatos"
import { LoaderContext } from '../components/Context/LoaderContext';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  const { itemId } = useParams()

  const { cargando, setCargando } = useContext(LoaderContext)

  useEffect(() => {
    setCargando(true)

    GetDatos()
      .then(res => {
        setItem(res.find(item => item.id === Number(itemId)))
      })
      .catch(err => console.log("el Error es el siguiente", err))
      .finally(() => {
        setCargando(false)
      });
  }, [])

  return (
    <>
      {
        cargando ?
          <div>
            <h1 className="loadingMessage"> CARGANDO... </h1>
            <p className="animateCargando"></p>
          </div>
          :
          <ItemDetail {...item} />
      }
    </>
  )
}
export default ItemDetailContainer;

