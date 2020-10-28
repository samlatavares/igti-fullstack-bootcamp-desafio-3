import Form from './Form';
import Installments from './Installments';
import React, { useState, useEffect } from 'react';
import installmentCalculator from './installment-calculator';

export default function App() {
  let [installments, setInstallments] = useState([]);
  let [amount, setAmount] = useState(0);
  let [period, setPeriod] = useState(0);
  let [tax, setTax] = useState(0);

  const handleFilter = (event) => {
    switch (event.target.name) {
      case 'amount':
        setAmount(event.target.value);
        break;
      case 'period':
        setPeriod(event.target.value);
        break;
      case 'tax':
        setTax(event.target.value);
        break;
    }
  };

  useEffect(() => {
    if (tax && amount && period) {
      setInstallments(installmentCalculator(tax, amount, period));
    }
  }, [tax, amount, period]);

  return (
    <div className="flexColumn">
      <div>
        <Form handleChange={handleFilter} />
      </div>
      <div>
        <Installments installments={installments} />
      </div>
    </div>
  );
}
