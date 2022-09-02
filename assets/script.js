const pw_strings =
{
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  chars: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
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
  var length = window.prompt("Enter password length from 8 to 128");
  // Checks if length is between 8 and 128 else returns error
  if(length < 8 || length > 128)
  {
    alert("Please enter password length from 8 to 128");
    return null;
  }
  
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
  // Asks user if they want special characters
  var chars = window.confirm("Would you like to use special characters?");
  if(chars)
  {
    passwordGenerated += pw_strings.chars;
  }

  if (passwordGenerated.length == 0)
  {
    alert("Error! Please try again and select an option.");
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
