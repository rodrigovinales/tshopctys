import React, { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";

const items = [{
  "id": "1",
  "ean": "7445216986224",
  "imagen": "gmrc.jpg",
  "categoria": "MOUSE",
  "nombre": "MOUSE GENIUS ROJO USB",
  "precio": "3.70"
},
{
  "id":2,
  "ean": 7855963250012,
  "imagen": "GTNC.jpg",
  "categoria": "TECLADOS",
  "nombre": "Teclado Mecanico Genius Smart Usb Kb-102 Español Para Pc",
  "precio": 4.05
},
{
  "id":3,
  "ean": 7852143259012,
  "imagen": "WEBCAM1000x.jpg",
  "categoria": "WEBCAM",
  "nombre": "Webcam Camara Genius Facecam 1000x Hd 720p Con Microfono Pc",
  "precio": 18.51
},
{
  "id":4,
  "ean": 7852143784215,
  "imagen": "FTATX850.jpg",
  "categoria": "FUENTES",
  "nombre": "FUENTE ATX 850W SENTEY MODULAR 80 PLUS",
  "precio": 41.5
},
{
  "id":5,
  "ean": 7857851484215,
  "categoria": "HP",
  "imagen": "tvparlantes.jpg",
  "nombre": "THONET VANDER SPIEL MADERA",
  "precio": 80
}
]

const ItemDetailContainer = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    getItem(3)
        .then(res =>setItem(res))
  }, [])

const getItem = (id) => {

  return new Promise ((res) => {
    setTimeout(() => {
      res(items.find(item => item.id === id))
      
    }, 2000);
  })
}

  return (
    <>
      <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer;

