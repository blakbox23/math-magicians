import React, { Component } from 'react';
import '../App.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc">
        <div className="screen">
          0
        </div>
        <div id="row1">
          <div id="c1r1">AC</div>
          <div id="c2r1">+/-</div>
          <div id="c3r1">%</div>
          <div id="c4r1" className="operators">/</div>
        </div>
        <div id="row2">
          <div id="c1r2">7</div>
          <div id="c2r2">8</div>
          <div id="c3r2">9</div>
          <div id="c4r2" className="operators">*</div>
        </div>
        <div id="row3">
          <div id="c1r3">4</div>
          <div id="c2r3">5</div>
          <div id="c3r3">6</div>
          <div id="c4r3" className="operators">-</div>
        </div>
        <div id="row4">
          <div id="c1r4">1</div>
          <div id="c2r4">2</div>
          <div id="c3r4">3</div>
          <div id="c4r4" className="operators">+</div>
        </div>
        <div id="row5">
          <div id="c1r5">0</div>
          <div id="c2r5">.</div>
          <div id="c3r5" className="operators">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
