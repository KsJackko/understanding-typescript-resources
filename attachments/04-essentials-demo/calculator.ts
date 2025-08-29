type investmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type investmentResult = {
  year: string;
  totalAmount: number;
  totalContribution: number;
  totalInterestEarned: number;
};

type CalculationResult = investmentResult[] | string;

function calculateInvestment(data: investmentData): CalculationResult {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;
  if (initialAmount < 0) {
    return 'Initial investment amount should be at least zero';
  }
  if (duration <= 0) {
    return 'No vaild of duration provided';
  }
  if (expectedReturn < 0) {
    return 'Expected return must be at least zero';
  }
  let total = initialAmount;
  let totalContribution = 0;
  let totalInterestEarned = 0;
  const annualResults: investmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContribution - initialAmount;
    totalContribution = totalContribution + annualContribution;
    total = total + annualContribution;

    annualResults.push({
      year: `Year ${i + 1}`,
      totalAmount: total,
      totalContribution,
      totalInterestEarned,
    });
  }
  return annualResults;
}

function printResults(results: CalculationResult): void {
  if (typeof results === 'string') {
    console.log(results);
    return;
  }

  results.forEach((yearEndResult) => {
    console.log(yearEndResult.year);
    console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResult.totalContribution.toFixed(0)}`,
    );
    console.log(
      `Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`,
    );
    console.log('----------------------');
  });
}

const investmentData: investmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};

const annualResults = calculateInvestment(investmentData);

printResults(annualResults);
