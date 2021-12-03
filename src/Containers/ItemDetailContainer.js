import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from 'react-router'
import GetDatos from "../helpers/GetDatos"



const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  const { itemId } = useParams()

  
  useEffect(() => {
   
      GetDatos() 
      .then( res => {
        setItem( res.find( item => item.id === Number(itemId)) )      
    },);

  }, [])
  return (
    <>
      <ItemDetail {...item} />
    </>
  )
}

export default ItemDetailContainer;

