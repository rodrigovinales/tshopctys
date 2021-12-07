import Productos from "../data/Productos"

const GetDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(Productos)
        },)
    })
}

export default GetDatos;


