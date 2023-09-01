import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Enlaza los métodos al contexto actual
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Método para incrementar el contador
  increment() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  // Método para decrementar el contador
  decrement() {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  // Método para reiniciar el contador
  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button className="inc" onClick={this.increment}>Increment</button>
        <button className="dec" onClick={this.decrement}>Decrement</button>
        <button className="reset" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
