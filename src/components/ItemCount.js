import add from "../img/icon/add.png";
import minus from "../img/icon/minus.png";


const ItemCount = ({ stock, onAdd, cantidad, setCantidad }) => {

    const restarCantidad = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const sumarStock = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return <>
    <div className="estilosenDetalle">
        <div className="estiloenDetalle">
                <div className="botonera">
                    <button className="btn btn-link" onClick={restarCantidad}><img className="boton-eliminarItem" src={minus} alt="restar" /></button>
                    <p className="conteo">{cantidad}</p>
                    <button className="btn -btn-link" onClick={sumarStock}><img className="boton-sumarItem" src={add} alt="sumar" /></button>
                </div>
                <button className="btn btn-success" onClick={onAdd}>Agregar al carrito</button>
            </div>
            </div>
        </>
}
export default ItemCount;