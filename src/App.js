import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calc">
            <Calculator />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
