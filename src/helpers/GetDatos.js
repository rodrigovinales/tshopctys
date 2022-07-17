import Productos from "../data/Productos"

const GetDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(Productos)
        }, 500)
    })
}

export default GetDatos; 