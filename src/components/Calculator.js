import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.click = this.click.bind(this);
  }

  click(e) {
    const { calc } = this.state;
    this.setState({
      calc: calculate(calc, e.target.innerHTML),
    });
  }

  render() {
    const { calc } = this.state;
    return (
      <div className="calculator">
        <input className="input" value={calc.total ? calc.total : 0} readOnly />
        <div className="test">
          <div className="numbers-symbols">
            <button type="button" className="buttons" onClick={this.click}>
              AC
            </button>
            <button type="button" onClick={this.click} className="buttons">
              +/-
            </button>
            <button type="button" onClick={this.click} className="buttons">
              %
            </button>
            <button type="button" onClick={this.click} className="buttons operators">
              ÷
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              7
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              8
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              9
            </button>
            <button type="button" onClick={this.click} className="buttons operators">
              x
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              4
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              5
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              6
            </button>
            <button type="button" onClick={this.click} className="buttons operators">
              -
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              1
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              2
            </button>
            <button type="button" onClick={this.click} className="buttons numbers">
              3
            </button>
            <button type="button" onClick={this.click} className="buttons operators">
              +
            </button>
            <button type="button" onClick={this.click} className="buttons numbers twoColl">
              0
            </button>
            <button type="button" onClick={this.click} className="buttons">
              .
            </button>
            <button type="button" onClick={this.click} className="buttons operators">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
