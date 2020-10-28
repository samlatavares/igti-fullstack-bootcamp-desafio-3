import React from 'react';
import css from './style.css';

export default function Form({ handleChange }) {
  return (
    <div>
      <div>
        <h1>React - Juros Compostos</h1>
      </div>
      <div className="flexRow">
        <div className="leftRightSpace">
          <label>Montante Inicial:</label>
          <input
            type="number"
            min="0"
            max="100000"
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div className="leftRightSpace">
          <label>Taxa de juros mensal:</label>
          <input
            type="number"
            min="-12"
            max="12"
            name="tax"
            onChange={handleChange}
          />
        </div>
        <div className="leftRightSpace">
          <label>Período (meses):</label>
          <input
            type="number"
            min="1"
            max="36"
            name="period"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}