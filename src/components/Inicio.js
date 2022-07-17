// import React from "react";


// const Inicio = () => {

//     return (
//         <div className="App">
//             <h1 className="container">  BIENVENIDOS </h1>
//             <p className="container"> Podras visitar nuestros productos </p>
//         </div>
//     )

// }

// export default Inicio;

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "../Css/inicio.css"


const Inicio = () => {

    return (
        <div className="App">
            <h1 className="container">  BIENVENIDOS </h1>
            {/* <p className="container"> Podras visitar nuestros productos </p> */}
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="sizeImg"
                        src={require (`../Assets/Imagenes/CCAST.JPG`).default }
                        alt="First slide"
                        />
                    <Carousel.Caption>
                        <h3 className="titleCarousel">Google ChromeCast</h3>
                        <p className="titleCarousel_parrafo">Converti tu tele en Smart !!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="sizeImg"
                        src={`${process.env.PUBLIC_URL}/productos/GPU115.jpg`}
                        alt="Second slide"
                        />

                    <Carousel.Caption>
                        <h3 className="titleCarousel">Parlantes Genius Usb</h3>
                        <p className="titleCarousel_parrafo">Ideal para notebooks. Buena definición de sonido.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="sizeImg"
                        src={`${process.env.PUBLIC_URL}/productos/thnvanspiemader.jpg`}
                        alt="Third slide"
                        />

                    <Carousel.Caption>
                        <h3 className="titleCarousel">Parlantes Thoner&Vander</h3>
                        <p className="titleCarousel_parrafo">Definición de sonido para exigentes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )

    
}

export default Inicio;