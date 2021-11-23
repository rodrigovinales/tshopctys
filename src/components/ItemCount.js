import React, { useState } from 'react';
import ssd240 from "../Assets/img/productos/ssd240gb.jpg";
import add from "../img/icon/add.png";
import minus from "../img/icon/minus.png";


const ItemCount = ({ stock, inicioCont, onAdd }) => {
    const [inicial, setInicial] = useState(inicioCont);
        
    const sumarStock = ()=> inicial+1 <= stock ? setInicial(inicial + 1) ? setInicial(inicial) : inicial === stock : console.log("No hay mas productos en Stock")  ;

    const restarCantidad = () => inicial -1 >=1 ? setInicial(inicial -1) ? setInicial(1) : inicial === 1 : console.log("Has llegado al minimo para la compra");
    
    const agregar = () => {
        // onAdd(conteo);
        console.log(`gracias por la compra de ${inicial} unidades`)
    }

    return <div>
        <div className="card" style={{ width: 288 }}>
            <img src={ssd240} className="card-img-top" alt="ssd240" />
            <div className="card-body">
                <h5 className="card-title">SSD 240gb Gigabyte</h5>
                <p className="card-text">El stock actual del producto es de {stock} unidades</p>

                <div className="botonera">
                    <i onClick={restarCantidad}><img className="boton-eliminarItem" src={minus} alt="restar" /></i>
                    <p className="conteo">{inicial}</p>
                    <i onClick={sumarStock}><img className="boton-sumarItem" src={add} alt="sumar" /></i>
                </div>
                <button className="btn btn-lg btn-dark" onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>


    </div>
}

export default ItemCount;