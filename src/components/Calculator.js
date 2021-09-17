import React, { Component } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

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
    const { total, next, operation } = this.state;
    return (
      <div className="calc">
        <div className="screen">
          {total}
          {operation}
          {next}
        </div>

        <div id="row1">
          <div id="c1r1" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>AC</div>
          <div id="c2r1" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>+/-</div>
          <div id="c3r1" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>%</div>
          <div id="c4r1" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent} className="operators">÷</div>
        </div>
        <div id="row2">
          <div id="c1r2" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>7</div>
          <div id="c2r2" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>8</div>
          <div id="c3r2" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>9</div>
          <div id="c4r2" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent} className="operators">x</div>
        </div>
        <div id="row3">
          <div id="c1r3" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>4</div>
          <div id="c2r3" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>5</div>
          <div id="c3r3" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>6</div>
          <div id="c4r3" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent} className="operators">-</div>
        </div>
        <div id="row4">
          <div id="c1r4" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>1</div>
          <div id="c2r4" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>2</div>
          <div id="c3r4" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>3</div>
          <div id="c4r4" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent} className="operators">+</div>
        </div>
        <div id="row5">
          <div id="c1r5" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>0</div>
          <div id="c2r5" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent}>.</div>
          <div id="c3r5" role="button" tabIndex="0" onKeyDown={this.handleEvent} onClick={this.handleEvent} className="operators">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
