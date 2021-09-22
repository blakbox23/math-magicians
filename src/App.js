import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <Calculator />
      </>
    );
  }
}

export default App;
