import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    //Importante bindear el contexto this para pasarlo a las funciones
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
    console.log(e);
  }
  restar(e) {
    console.log("restando");
    this.setState({
      contador: this.state.contador - 1,
    });
    console.log(e);
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow Functions

  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
    console.log(e);
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
    console.log(e);
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>;
// }

// const Boton = (props) => (
//   <button onClick={props.myOnClick}>Boton Hecho Componente</button>
// );

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton Hecho Componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.target);

    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);

    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>

        {/* Evento Personalizado */}
        {/* <Boton onClick={(e) => this.handleClick(e, "Hola")}></Boton> */}

        {/* Evento Personalizado */}
        <Boton myOnClick={(e) => this.handleClick(e, "Hola")}></Boton>
      </div>
    );
  }
}
