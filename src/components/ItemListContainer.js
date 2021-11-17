import React, { Component } from "react";
import ItemCount from "./ItemCount";

class Conteo extends Component {
  render() {
    // return <h2>{mensajeSaludo}{this.props.mensaje}</h2>
    return <ItemCount stock={7} inicioCont={1}/>

        ;
  }
}

export default Conteo;
