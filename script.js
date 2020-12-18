document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keys");
  const calcDisplay = document.querySelector(".calculator__display");
  let numberArray = [];
  let currentNumbers = [];

  keys.addEventListener("click", (e) => {
    if (e.target.matches(".noBtn")) {
      let ourNumber = Number(e.target.textContent);

      numberArray.push(ourNumber);

      let concatNumber = numberArray.join("");
      concatNumber = Number(concatNumber);
      calcDisplay.textContent = concatNumber;

      return currentNumbers.push(concatNumber);
    } else if (e.target.matches(".key--operator")) {
      // först när vi trycker här, ska numret sparas
      // SEDAN när vi trycker på +-* ska detta hända:
      let firstValue = currentNumbers[currentNumbers.length - 1];
      console.log(firstValue);
      let operatorValue = e.target.textContent;
      console.log(operatorValue);
      //Spara operatorValue någonstans så att man kan ta firstValue (+-*) secondValue

      if (e.target.matches(".noBtn")) {
        let ourNumber = Number(e.target.textContent);

        numberArray.push(ourNumber);

        let concatNumber = numberArray.join("");
        concatNumber = Number(concatNumber);
        calcDisplay.textContent = concatNumber;

        return currentNumbers.push(concatNumber);
      } else if (e.target.matches(".key--equal")) {
        let secondValue = currentNumbers[currentNumbers.length - 1];
        console.log(secondValue);
        //firstValue (+-*) secondValue
        let sum = `${firstValue}${operatorValue}${secondValue}`;
        calcDisplay.textContent = sum;
      }
    }
  });
});
