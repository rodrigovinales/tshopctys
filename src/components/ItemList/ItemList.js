import React from "react";
import Item from "../Item/Item"

const ItemList = ({items}) => {

    return (
        <>
        {items.map ( el =>  {
            return <Item items key={el.id} {...el}/>
        })}
        </>
    )
}

export default ItemList;