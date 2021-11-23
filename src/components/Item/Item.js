import React from "react";

const Item = ({ name, thumbnail, series }) => {
    
    return (
        <div className="list_products">
            <div className="card" style={{ width: 288 }}>
                <h2 className="card-title">{name}</h2>
                <img src={`${thumbnail.path}.jpg`} className="card-img-top" alt={thumbnail} />
                <div className="card-body">
                    <h4> Cantidad de Series {series.available} </h4>
                </div>
            </div>
            </div>
    )
}
export default Item;