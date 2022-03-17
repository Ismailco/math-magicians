import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calc, setItems] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const click = (e) => {
    setItems({ calc: calculate(calc, e.target.innerHTML) });
  };

  return (
    <div className="calculator">
      <input className="input" value={calc.total ? calc.total : 0} readOnly />
      <div className="test">
        <div className="numbers-symbols">
          <button type="button" className="buttons" onClick={click}>
            AC
          </button>
          <button type="button" onClick={click} className="buttons">
            +/-
          </button>
          <button type="button" onClick={click} className="buttons">
            %
          </button>
          <button type="button" onClick={click} className="buttons operators">
            ÷
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            7
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            8
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            9
          </button>
          <button type="button" onClick={click} className="buttons operators">
            x
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            4
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            5
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            6
          </button>
          <button type="button" onClick={click} className="buttons operators">
            -
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            1
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            2
          </button>
          <button type="button" onClick={click} className="buttons numbers">
            3
          </button>
          <button type="button" onClick={click} className="buttons operators">
            +
          </button>
          <button type="button" onClick={click} className="buttons numbers twoColl">
            0
          </button>
          <button type="button" onClick={click} className="buttons">
            .
          </button>
          <button type="button" onClick={click} className="buttons operators">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
