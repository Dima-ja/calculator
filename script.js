document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keys");
  const calcDisplay = document.querySelector(".calculator__display");
  //let currentNumbers = [];
  let firstNumber="";
  let savedfirst="";
  let secondNumber ="";
  let operatorValue = "";
  let sum = 0;

  keys.addEventListener("click", (e) => {
    if (e.target.matches(".clear")) {
      firstNumber="";
      savedfirst="";
      secondNumber ="";
      operatorValue = "";
      sum = 0;
      calcDisplay.textContent="0";
    }

    if (e.target.matches(".noBtn")) {
      let currentNumber = e.target.textContent;
      firstNumber += currentNumber;
      calcDisplay.textContent = firstNumber;
      return firstNumber;

    } else if (e.target.matches(".key--equal")) {
        let numbersavedfirst = Number(savedfirst);
        let numberfirstnumber = Number(firstNumber);
        
        switch(operatorValue) {
          case "+":
            sum = numbersavedfirst + numberfirstnumber;
            break;
          case "-":
            sum = numbersavedfirst - numberfirstnumber;
            break;
          case "÷":
            sum = numbersavedfirst/numberfirstnumber;
            break;
          case "×":
            sum = numbersavedfirst*numberfirstnumber
            break;
        }
        console.log(sum);
        calcDisplay.textContent = sum;
        firstNumber = sum;

    } else if (e.target.matches(".key--operator")) {
        operatorValue = e.target.textContent;
        //keys.querySelectorAll('.noBtn').classList.add('noBtn2');
        //keys.querySelectorAll('.noBtn').classList.remove('.noBtn')
        console.log(operatorValue);

        savedfirst = firstNumber;
        firstNumber = "";

    };

  });
  
});
