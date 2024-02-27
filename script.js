// Assignment code here
// Demonstrate password criteria using an array for special characters, lower case letters, upper case letters, and numeric characters

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ":", "'", "?", ">", "<"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  if (isNaN(length) === true) {
    alert("Please enter a valid number for the password length.");
    return;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters.");
    return;
  }
  
  if (length > 128) {
    alert("Password lenght must be less than 129 characters.");
    return;
  }

  var includeSpecialCharacters = confirm("Would you like your password to include special characters? If YES, click OK. If NO, click CANCEL");
  var includeLowerCaseCharacters = confirm("Would you like your password to containe lower case characters? If YES, click OK. If NO, click CANCEL");
  var includeUpperCaseCharacters = confirm("Would you like your password to include upper case characters? If YES, click OK. If NO, click CANCEL");
  var includeNumericCharacters = confirm("Would you like your password to include numeric characters? If YES, click OK. If NO, click CANCEL");

  if (!includeSpecialCharacters && !includeLowerCaseCharacters && !includeUpperCaseCharacters &&!includeNumericCharacters) {
    return null;
  }
  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeLowerCaseCharacters: includeLowerCaseCharacters,
    includeUpperCaseCharacters: includeUpperCaseCharacters,
    includeNumericCharacters: includeNumericCharacters,
  };

return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();
  if (!options) return " ";

  var allCharacters = [];
  if (options.includeSpecialCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
  }
  if (options.includeLowerCaseCharacters) {
    allCharacters = allCharacters.concat(lowerCaseCharacters);
  }
  if (options.includeUpperCaseCharacters) {
    allCharacters = allCharacters.concat(upperCaseCharacters);
  }
  if (options.includeNumericCharacters) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

var password = '';
for (var i = 0; i < options.length; i++) {
  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  password += allCharacters[randomIndex];
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Defines a function named "writePassword"
  var password = generatePassword();
  // Calls function named "generatePassword" to generate a password; password stored in variable called password
  var passwordText = document.querySelector("#password");
  // reference to element "passwordText" 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
