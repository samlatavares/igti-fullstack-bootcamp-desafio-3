export default function installmentCalculator(tax, amount, period) {
  let installments = [];
  let taxPercentage = tax / 100;

  for (let i = 1; i <= period; i++) {
    let interest = Math.pow(1 + taxPercentage, i);
    let total = Math.abs(amount * interest);
    let difference = total - amount;
    let percentage = amount === 0 ? 0 : difference / amount;

    let installment = {
      month: i,
      total: total,
      difference: difference,
      percentage: percentage,
    };

    installments.push(installment);
  }

  return installments;
}
