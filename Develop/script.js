//functions (from https://www.w3schools.com/html/html_charset.asp)
function randomLower () {
  return String.fromCharCode(Math.floor(Math.random ()* 26) + 97);
}
// console.log (randomLower())

function randomUpper (){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}
// console.log (randomUpper())

function randomSymbol (){
  return String.fromCharCode(Math.floor(Math.random()*15) + 33)
}
console.log (randomSymbol())

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function generatePassword (){
  var submitLength = parseInt(prompt("How long would you like your password (between 10-20)?"));
  // Be sure length criteria is appropriate
  if (!submitLength){
    window.alert ("Come on man, I need answer here...");
    submitLength;
  }else if (submitLength<10 || submitLength>20){
    window.alert ("Please read the instructions my guy");
    parseInt(prompt("How long would you like your password (between 10-20)?"));
    submitLength;
  }
  else {
    wantLower = window.confirm ("Do you want lower case characters?");
    wantUpper = window.confirm ("Do you want upper case characters?");
    wantSymbol = window.confirm ("Do you want symbol characters?");
    wantNumber = window.confirm ("Do you want numbers?");
  }
}

console.log (generatePassword)
// console.log (randomNumber())


// // Letters
// letters=
// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  window.prompt ("Do you want lower case letters?");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
}
