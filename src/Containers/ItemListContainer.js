import React from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from 'react-router';
import { useCollection } from '../hooks/useCollection';

const ItemListContainer = () => {

    const { catId } = useParams();
    const { cargando, productos: productos } = useCollection("productos", catId)
    
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
