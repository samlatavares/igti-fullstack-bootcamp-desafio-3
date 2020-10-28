import React, { useState, useEffect } from 'react';
import css from './style.css';

export default function Installment({ month, total, difference, percentage }) {
  return (
    <div className="installmentCard">
      <div>
        <label className="leftRightSpace">{month}</label>
      </div>
      <div>
        <label className="leftRightSpace">{total}</label>
        <label className="leftRightSpace">{difference}</label>
        <label className="leftRightSpace">{percentage}</label>
      </div>
    </div>
  );
}
