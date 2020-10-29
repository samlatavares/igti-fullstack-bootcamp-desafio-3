import React from 'react';
import Installment from './Installment';
import { formatCurrency, formatPercentage } from './formatter';

export default function Installments({ installments }) {
  const listIntallments = installments.map((installment) => {
    return (
      <div className="installmentCard marginSpace">
        <Installment
          month={installment.month}
          total={formatCurrency(installment.total)}
          difference={formatCurrency(installment.difference)}
          percentage={formatPercentage(installment.percentage)}
        />
      </div>
    );
  });

  return <div className="installmentGrid rowWrap">{listIntallments}</div>;
}
