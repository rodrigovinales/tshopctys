import React, { useState } from 'react';
import ssd240 from "../img/productos/ssd240.jpg";
import add from "../img/icon/add.png";
import minus from "../img/icon/minus.png";


const ItemCount = ({ stock, onAdd }) => {
    const [conteo, setConteo] = useState(1);
    stock = 7;

    const sumarStock = () => {
        if (conteo + 1 <= stock) {
            setConteo(conteo + 1);
        }
        else {
            setConteo(conteo)
        }
        ;
    }
    const restarCantidad = () => {
        if (conteo - 1 >= 1) {
            setConteo(conteo - 1)
        }
        else {
            setConteo(1);
        };
    }
    const agregar = () => {
        // onAdd(conteo);
        console.log("La funcion no realiza ninguna tarea por el momento");
    }

    return <div>
        <div className="card" style={{ width: 288 }}>
            <img src={ssd240} className="card-img-top" alt="ssd240" />
            <div className="card-body">
                <h5 className="card-title">SSD 240gb Gigabyte</h5>
                <p className="card-text">El stock actual del producto es de 7 unidades</p>

                <div className="botonera">
                    <i onClick={restarCantidad}><img className="boton-eliminarItem" src={minus} alt="restar"/></i>
                    <p className="conteo">{conteo}</p>
                    <i onClick={sumarStock}><img className="boton-sumarItem" src={add} alt="sumar"/></i>
                </div>
                <button className="btn btn-lg btn-dark" onClick={agregar}>Agregar al carrito</button>

            </div>
        </div>


    </div>
}

export default ItemCount;