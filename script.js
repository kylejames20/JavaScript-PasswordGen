//assigning varibles to work throughout the JavaScript
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var lowerCase = true;
var upperCase = true;
var numbers = true;
var specialChar = true;
const symbols = ["!","#","$",".","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
const lowerAbc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperAbc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numeros = ["0","1","2","3","4","5","6","7","8","9"];
//first function, letting user start the password process
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password; 
  }
  //making sure the user maintains a password between designated character parameters
function passwordLengthCheck() {
    let passwordSize = prompt("How many characters do you want?")
     if (passwordSize < 8 || passwordSize > 128){
    alert("Your password must be between 8 - 128 characters.")
    passwordLengthCheck()
  } else {return passwordSize}
}
//once user selects character amount, this asks user what character styles they want to use
function generatePassword() {
  var passString = "";
  var passwordItems = [];
  let passwordLength = passwordLengthCheck()
  lowerCase = window.confirm ("Do you want lower case letters?");
  upperCase = window.confirm ("Do you want upper case letters?");
  numbers = window.confirm("Do you wany numbers?");
  specialChar = window.confirm("Do you want special characters?");
//asking user if they want lower case letters
  if (lowerCase == true){
    passwordItems = passwordItems.concat(lowerAbc);
  }
  //asking user if they want upper case letters
  if(upperCase == true){
    passwordItems = passwordItems.concat(upperAbc);
  }
  //asking user if they want numbers
  if(numbers == true){
    passwordItems = passwordItems.concat(numeros);
  }
  //asking user if they want special characters
  if(specialChar == true){
    passwordItems = passwordItems.concat(symbols);
  }
  //allows me to check console log if problems arise
  console.log(passwordItems);
  console.log(passwordItems[14]);
  
  for (let i = 0; i < passwordLength; i++) {
        passString += passwordItems[
          Math.floor(Math.random() * passwordItems.length)
        ];
      }
  return passString;
}

generateBtn.addEventListener("click", writePassword);
