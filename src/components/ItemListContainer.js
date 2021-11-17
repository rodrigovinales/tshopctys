import React, { Component } from "react";
import ItemCount from "./ItemCount";

class Conteo extends Component {
  render() {
    // return <h2>{mensajeSaludo}{this.props.mensaje}</h2>
    return <ItemCount stock="7"/>

        ;
  }
}

export default Conteo;
