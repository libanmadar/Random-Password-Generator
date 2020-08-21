
const number = "0123456789"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const specialChars = "!#$%&+"

function generatePassword() {
  var passwordPrompts = "";

  var length = window.prompt("How many characters long would you like your password to be, 8 - 128 character limit");
  if (length<8) {
    window.alert("password has to be longer than 8 characters")
  }
  if (length>128){
    window.alert("password is too long")
  }

  var uppercase = window.confirm("Would you like any uppercase letters?");
  if (uppercase) {
    passwordPrompts += uppercase;
  };

  var lowercase = window.confirm("Would you like any lowercase letters?");
  if (lowercase) {
    passwordPrompts += lowercase;
  };

  
  var symbols = window.confirm("Would you like any symbols?");
  if (symbols) {
    passwordPrompts += specialChars;
  };

  var numbers = window.confirm("Would you like any numbers?");
  if (numbers) {
    passwordPrompts += number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordPrompts[Math.floor(Math.random() * passwordPrompts.length)]
  }
  return password;
}

console.log(generatePassword());





var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);






