import React from "react";


const Cart = () => {


    return (
        <div className="container mt-5" align="center">

            <h4>Lista en carrito</h4>

            {/* <div className="row">

                <div className="col-md-12">

                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>

                            {productos.map(e => (

                                <tr key={e.id}>
                                    <td>{e.nombre}</td>
                                    <td>{e.stock}</td>
                                    <td>{e.precio}</td>
                                    <td><img src={`${process.env.PUBLIC_URL}/productos/${e.img}`} alt={e.nombre} width="50px" className="img-fluid" /></td>
                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div> */}

        </div>

    )

}

export default Cart;


