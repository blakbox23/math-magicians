/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    const obj = calculate(this.state, e.target.innerText);
    this.setState(obj);
  }

  render() {
    return (
      <div className="calc">
        <div className="screen">
          <span>{this.state.total}</span>
          <span>{this.state.operation}</span>
          <span>{this.state.next}</span>
        </div>
        <div id="row1">
          <div id="c1r1" onClick={this.handleEvent}>AC</div>
          <div id="c2r1" onClick={this.handleEvent}>+/-</div>
          <div id="c3r1" onClick={this.handleEvent}>%</div>
          <div id="c4r1" onClick={this.handleEvent} className="operators">÷</div>
        </div>
        <div id="row2">
          <div id="c1r2" onClick={this.handleEvent}>7</div>
          <div id="c2r2" onClick={this.handleEvent}>8</div>
          <div id="c3r2" onClick={this.handleEvent}>9</div>
          <div id="c4r2" onClick={this.handleEvent} className="operators">x</div>
        </div>
        <div id="row3">
          <div id="c1r3" onClick={this.handleEvent}>4</div>
          <div id="c2r3" onClick={this.handleEvent}>5</div>
          <div id="c3r3" onClick={this.handleEvent}>6</div>
          <div id="c4r3" onClick={this.handleEvent} className="operators">-</div>
        </div>
        <div id="row4">
          <div id="c1r4" onClick={this.handleEvent}>1</div>
          <div id="c2r4" onClick={this.handleEvent}>2</div>
          <div id="c3r4" onClick={this.handleEvent}>3</div>
          <div id="c4r4" onClick={this.handleEvent} className="operators">+</div>
        </div>
        <div id="row5">
          <div id="c1r5" onClick={this.handleEvent}>0</div>
          <div id="c2r5" onClick={this.handleEvent}>.</div>
          <div id="c3r5" onClick={this.handleEvent} className="operators">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
