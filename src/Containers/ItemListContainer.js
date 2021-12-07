import React, { useEffect, useState, useContext } from 'react'
import GetDatos from "../helpers/GetDatos"
import ItemList from "../components/ItemList/ItemList";
import { LoaderContext } from '../components/Context/LoaderContext';
import { useParams } from 'react-router';

const ItemListContainer = () => {

    const { cargando, setCargando } = useContext(LoaderContext)
    const { catId } = useParams();
    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState('')

    const handleChange = (e) => {
        setBusqueda(e.target.value)
    }

    useEffect(() => {
        setCargando(true)
        setTimeout(() => {
            GetDatos()
                .then(datos => {
                    if (!busqueda) {
                        setProductos(datos)
                    } else {
                        setProductos(datos.filter(prod => prod.nombre.toLowerCase().includes(busqueda.toLowerCase())))
                    }
                })
                .finally(() => {
                    setCargando(false)
                });
        }, 500)
    }, [busqueda])

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
        }, 500)
    }, [catId])

    return (
        <div className="container">
            <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa el producto a buscar"
                    value={busqueda}
                    onChange={handleChange}
                />
            </form>
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
