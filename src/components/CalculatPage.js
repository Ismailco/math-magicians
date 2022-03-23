import './CalculatPage.css';
import React from 'react';
import Calculator from './Calculator';

function CalculatPage() {
  return (
    <div className="calculatPage">
      <p className="paragraph">Let&apos;s do some math!</p>
      <Calculator className="calculator" />
    </div>
  );
}

export default CalculatPage;
