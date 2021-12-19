import React, { useEffect, useState, useContext } from 'react'
import ItemList from "../components/ItemList/ItemList";
import { LoaderContext } from '../components/Context/LoaderContext';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from "../Firebase/Config";

const ItemListContainer = () => {

    const { cargando, setCargando } = useContext(LoaderContext)
    const { catId } = useParams();
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {
            const productosRef = collection(db, "productos")
            const q = catId ? query(productosRef, where('categoria', '==', catId)) : productosRef
            getDocs(q)
                .then((snapshot) => {
                    const items = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })
                    )
                    setProductos(items)
                })
                .catch(err => console.log("el Error es el siguiente", err))
                .finally(() => {
                    setCargando(false)
                });
        }, 500)
    }, [catId])

    return (
        <div className="container">
            {
                cargando
                    ?
                    <>
                        <h1 className="loadingMessage"> CARGANDO ... </h1>
                        <p className="animateCargando"></p>
                    </>
                    :
                    <ItemList items={productos} />
            }

        </div>
    )
}
export default ItemListContainer;





















// import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from 'react-router';
// import { LoaderContext } from '../components/Context/LoaderContext';
// import ItemList from "../components/ItemList/ItemList";
// import GetDatos from "../helpers/GetDatos"


// const ItemListContainer = () => {
//   const [productos, setProductos] = useState([])
//   const { catId } = useParams();
//   const { cargando, setCargando } = useContext(LoaderContext)

  // useEffect(() => {
  //   setCargando(true)
  //   setTimeout(() => {
  //     GetDatos()
  //       .then(datos => {

  //         if (!catId) {
  //           setProductos(datos)
  //         } else {
  //           setProductos(datos.filter(prod => prod.categoria === catId))
  //         }
  //       })
  //       .catch(err => console.log("el Error es el siguiente", err))
  //       .finally(() => {
  //         setCargando(false)
  //       });
  //   }, 500)
  // }, [catId])

//   return <>
//     {
//       cargando
//         ?
//         <>
//           <h1 className="loadingMessage"> CARGANDO ... </h1>
//           <p className="animateCargando"></p>
//         </>
//         :
//         <ItemList items={productos} />
//     }
//   </>
// }

// export default ItemListContainer;
