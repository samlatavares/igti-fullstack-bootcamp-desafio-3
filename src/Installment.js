import React from 'react';

export default function Installment({ month, total, difference, percentage }) {
  return (
    <div className="flexDirectionRow">
      <div>
        <label className="marginSpace">{month}</label>
      </div>
      <div>
        <div>
          <label className="marginSpace">{total}</label>
        </div>
        <div>
          <label className="marginSpace">{difference}</label>
        </div>
        <div>
          <label className="marginSpace">{percentage}</label>
        </div>
      </div>
    </div>
  );
}
