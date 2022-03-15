import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props = 0) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="calculator">
        <input className="input" type="number" value={0} readOnly />
        <div className="test">
          <ul className="numbers-symbols">
            <li className="buttons">AC</li>
            <li className="buttons">+/-</li>
            <li className="buttons">%</li>
            <li className="buttons operators">÷</li>
            <li className="buttons numbers">7</li>
            <li className="buttons numbers">8</li>
            <li className="buttons numbers">9</li>
            <li className="buttons operators">x</li>
            <li className="buttons numbers">4</li>
            <li className="buttons numbers">5</li>
            <li className="buttons numbers">6</li>
            <li className="buttons operators">-</li>
            <li className="buttons numbers">1</li>
            <li className="buttons numbers">2</li>
            <li className="buttons numbers">3</li>
            <li className="buttons operators">+</li>
            <li className="buttons numbers twoColl">0</li>
            <li className="buttons">.</li>
            <li className="buttons operators">=</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;
