document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keys");
  const calcDisplay = document.querySelector(".calculator__display");

  let totalNumber="";
  let savedFirst="";
  let operatorValue = "";
  let sum = 0;

  keys.addEventListener("click", (e) => {
    if (e.target.matches(".clear")) {
      totalNumber="";
      savedFirst="";
      operatorValue = "";
      sum = 0;
      calcDisplay.textContent="0";
    }

    if (e.target.matches(".noBtn")) {
      let currentNumber = e.target.textContent;
      totalNumber += currentNumber;
      calcDisplay.textContent = totalNumber;
      return totalNumber;
    } else if (e.target.matches(".key--equal")) {
        let intFirst = Number(savedFirst);
        let intSecond = Number(totalNumber);
        
        switch(operatorValue) {
          case "+":
            sum = intFirst + intSecond;
            break;
          case "-":
            sum = intFirst - intSecond;
            break;
          case "÷":
            sum = intFirst/intSecond;
            break;
          case "×":
            sum = intFirst*intSecond;
            break;
        }
        calcDisplay.textContent = sum;
        totalNumber = sum;

    } else if (e.target.matches(".key--operator")) {
        operatorValue = e.target.textContent;
        savedFirst = totalNumber;
        totalNumber = "";
    };

  });
  
});
