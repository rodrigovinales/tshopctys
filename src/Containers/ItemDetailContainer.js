import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from 'react-router'
// import GetDatos from "../helpers/GetDatos"
import { LoaderContext } from '../components/Context/LoaderContext';


import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from "../Firebase/Config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  const { itemId } = useParams()

  const { cargando, setCargando } = useContext(LoaderContext)

  useEffect(() => {
    setCargando(true)

    const docRef = doc(db, "productos", itemId)
    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data()
        })
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

