import React from 'react';
import Installment from './Installment';

export default function Installments({ installments }) {
  const listIntallments = installments.map((installment) => {
    return (
      <div>
        <Installment
          month={installment.month}
          total={installment.total}
          difference={installment.difference}
          percentage={installment.percentage}
        />
      </div>
    );
  });

  return <div className="installmentGrid rowWrap">{listIntallments}</div>;
}
