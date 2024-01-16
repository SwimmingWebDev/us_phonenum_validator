// US Phone Number Validator
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultText = document.getElementById("results-div");
const userInput = document.getElementById("user-input");

const validNum = /^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const checkInput = (value) => {
  if (validNum.test(value)) {
    resultText.textContent = "Valid US number: " + value;
  } else {
    resultText.textContent = "Invalid US number: " + value;
  }
};

const clearResult = () => {
  resultText.textContent = "";
};

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
    return;
  }
  checkInput(userInput.value);
});
clearBtn.addEventListener("click", clearResult);
