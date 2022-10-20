import React, { Component } from "react";
//class Componente extends React.Component {}
// class Componente extends Component {
//   render() {
//     // return <h2>Hola soy un Componente</h2>;
//     return <h2>{this.props.msg}</h2>;
//   }
// }

// function Componente(props) {
//   return <h2>{props.msg}</h2>;
// }

const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;
