document.addEventListener("DOMContentLoaded", function () {
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".calculator__keys");
  const calcDisplay = document.querySelector(".calculator__display");
  let numberArray = [];

  keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      //   let ourNumber = calcDisplay.textContent;
      //   ourNumber = Number(e.target.textContent);

      let ourNumber = Number(e.target.textContent);
      calcDisplay.textContent = ourNumber;
    }
  });
});
