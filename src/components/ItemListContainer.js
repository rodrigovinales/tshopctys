import React, { Component } from "react";

const mensajeSaludo = "Hola, "
class mostrarSaludo extends Component {
  render() {
    return <h2>{mensajeSaludo}{this.props.mensaje}</h2>
        ;
  }
}

export default mostrarSaludo;
