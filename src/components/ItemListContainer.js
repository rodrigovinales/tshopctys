import React, { Component } from "react";

class mostrarSaludo extends Component {
  render() {
    return <h2>{this.props.mensaje}</h2>;
  }
}

export default mostrarSaludo;
