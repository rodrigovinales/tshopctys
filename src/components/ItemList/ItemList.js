import React, { useState } from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {

    const [query, setQuery] = useState("");

    return (
        <div className="app">
            <input
                className="inputProductos"
                placeholder="Nombre de producto a buscar..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />

            <hr></hr>
            <ul className="list">
                {items.filter((search) =>
                    search.nombre.toLowerCase().includes(query)
                ).map((el) => (
                    <Item items key={el.id} {...el} />
                ))}
            </ul>
        </div>

    );
}

export default ItemList;