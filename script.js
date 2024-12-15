document.addEventListener("DOMContentLoaded", () => {
  //! Select the elements
  const calculateBtn = document.getElementById("calculateBtn");
  const amountInput = document.getElementById("amount");
  const interestInput = document.getElementById("interest");
  const yearsInput = document.getElementById("years");
  //Summary
  const monthelyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  //Function to calculate the loan
  function calculateLoan() {
    const principal = parseFloat(amountInput.value);
    const intrest = parseFloat(interestInput.value) / 100 / 12;
    const payments = parseFloat(yearsInput.value) * 12;
    if (isNaN(principal) || isNaN(intrest) || isNaN(payments)) {
      alert("Please enter valid numbers");
      return;
    }
    //calculate the monthly payment
    const x = Math.pow(1 + intrest, payments);
    const monthely = (principal * x * intrest) / (x - 1);
    if (isFinite(monthely)) {
      //calc total payment and interest
      const total = monthely * payments;
      const totalInterest = total - principal;
      //show the results
      monthelyPayment.textContent = monthely;
      totalPayment.textContent = total;
      totalInterestPayment.textContent = totalInterest;
    }
  }

  //bind the event to the calculate button
  calculateBtn.addEventListener("click", calculateLoan);
});
