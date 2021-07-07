import React from 'react';

export default function Form({ handleChange }) {
  return (
    <div>
      <div>
        <h1>Compound Interest Calculator</h1>
      </div>
      <div className="flexRow">
        <div className="marginSpace">
          <label>Initial Value:</label>
          <input
            type="number"
            min="0"
            max="100000"
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div className="marginSpace">
          <label>Montly interest:</label>
          <input
            type="number"
            min="-12"
            max="12"
            name="tax"
            onChange={handleChange}
          />
        </div>
        <div className="marginSpace">
          <label>Term (months):</label>
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
