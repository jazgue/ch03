const pw_strings =
{
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password
function generatePassword()
{
  passwordGenerated = "";
  // Asks user for length of password
  var length = window.prompt ("Enter password length from 8 to 128.");

  // Asks user if they want lowercase letters
  var lowercase = window.confirm("Would you like to use lowercase?");
  if(lowercase)
  {
    passwordGenerated += pw_strings.lowercase;
  }
  // Asks user if they want uppercase letters
  var uppercase = window.confirm("Would you like to use uppercase?");
  if(uppercase)
  {
    passwordGenerated += pw_strings.uppercase;
  }
  // Asks user if they want numbers
  var numbers = window.confirm("Would you like to use numbers?");
  if(numbers)
  {
    passwordGenerated += pw_strings.numbers;
  }
  // Asks user if they want symbols
  var symbols = window.confirm("Would you like to use symbols?");
  if(symbols)
  {
    passwordGenerated += pw_strings.symbols;
  }
  // Sets empty string
  var password = "";

  // Randomizes the password then returns randomized password
  for(i = 0; i<length; i++)
  {
    password += passwordGenerated[Math.floor(Math.random() * passwordGenerated.length)]
  }
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
