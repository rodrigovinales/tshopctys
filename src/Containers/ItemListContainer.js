import React, { useState, useEffect } from 'react';
// import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList/ItemList";
// import inventario from "../Assets/inventario.json"

const publicKey = "82462bc7b12ed6c831359d463f566ed7";
const hash5 = "c8874bd8adc2d873d5198b2b5314d864"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(() => {

      fetch(`https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${hash5}`)
        .then(res => res.json())
        .then(data => {
          setProductos(data.data.results);
        })
        .catch();
    }, 3000);
  }, [])


  return <>
    {/* <ItemCount stock={7} inicioCont={1} /> */}
    <ItemList items={productos} />


  </>
}



export default ItemListContainer;
