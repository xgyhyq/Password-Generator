const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]|:;<>,.?/~";

const lengthRange = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbersOption = document.getElementById("numbers");
const symbolsOption = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordField = document.getElementById("password-field");

// Update the length value when the range slider is moved
lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const length = lengthRange.value;
  const hasUppercase = uppercase.checked;
  const hasLowercase = lowercase.checked;
  const hasNumbers = numbersOption.checked;
  const hasSymbols = symbolsOption.checked;

  passwordField.value = generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);
});

function generatePassword(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) {
  let characters = "";
  let password = "";

  if (hasUppercase) {
    characters += uppercaseLetters;
  }

  if (hasLowercase) {
    characters += lowercaseLetters;
  }

  if (hasNumbers) {
    characters += numbers;
  }

  if (hasSymbols) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}
