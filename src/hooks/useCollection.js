import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from "../Firebase/Config";



export const useCollection = (coleccion, catId) => {

    const [cargando, setCargando] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setCargando(true)
        const collectionRef = collection(db, coleccion)
            const q = catId ? query(collectionRef, where('categoria', '==', catId)) : collectionRef
            getDocs(q)
                .then((snapshot) => {
                    const items = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })
                    )
                    setProductos(items)
                })
                .finally(() => {
                    setCargando(false)
                })

    }, [catId])

    return {
        cargando,
        productos
    }
}
