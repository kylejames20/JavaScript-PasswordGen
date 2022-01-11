// Assignment Code
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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  passwordLength = window.prompt("How many characters do you want?");
  lowerCase = window.confirm ("Do you want lower case letters?");
  upperCase = window.confirm ("Do you want upper case letters?");
  numbers = window.confirm("Do you wany numbers?");
  specialChar = window.confirm("Do you want special characters?");
  if (lowerCase == true){

  }
  if(upperCase == true){

  }
  if(numbers == true){

  }
  if(specialChar == true){
    
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
