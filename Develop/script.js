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
// console.log (randomSymbol())

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}
// console.log (randomNumber())

var randomFunction = {
  lower: randomLower, 
  upper: randomUpper, 
  symbol: randomSymbol, 
  number: randomNumber
};


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
    var wantLower = window.confirm ("Do you want lower case characters?");
    var wantUpper = window.confirm ("Do you want upper case characters?");
    var wantSymbol = window.confirm ("Do you want symbol characters?");
    var wantNumber = window.confirm ("Do you want numbers?");
  }
  // Possible situtations:
  // All denied 
  if (!wantLower && !wantUpper && !wantSymbol && !wantNumber){
    alert("You have to pick one...");
    var wantLower = window.confirm ("Do you want lower case characters?");
    var wantUpper = window.confirm ("Do you want upper case characters?");
    var wantSymbol = window.confirm ("Do you want symbol characters?");
    var wantNumber = window.confirm ("Do you want numbers?");
  }
    // 4 accepted
    else if (wantLower && wantUpper && wantSymbol && wantNumber){
      for (var i = 0; i < zooAnimals.length; i++) { 
        console.log("I am going to zoo to see " + zooAnimals[i] + ".");
    }
    }
    // 3 accepted 1 denied 
    else if (wantLower && wantUpper && wantSymbol && !wantNumber){
    }
    else if (wantLower && wantUpper && !wantSymbol && wantNumber){
    }
    else if (wantLower && !wantUpper && wantSymbol && wantNumber){
    }
    else if (!wantLower && wantUpper && wantSymbol && wantNumber){
    }
    // 2 accepted, 2 denied 
    else if (wantLower && wantUpper && !wantSymbol && !wantNumber){
    }
    else if (wantLower && !wantUpper && wantSymbol && !wantNumber){
    }
    else if (!wantLower && wantUpper && wantSymbol && !wantNumber){
    }
    else if (!wantLower && !wantUpper && wantSymbol && wantNumber){
    }
    else if (!wantLower && wantUpper && !wantSymbol && wantNumber){
    }
    else if (wantLower && !wantUpper && !wantSymbol && wantNumber){
    }
    // 1 accepted, 3 denied
    else if (!wantLower && wantUpper && wantSymbol && wantNumber){
    }
    else if (wantLower && !wantUpper && wantSymbol && wantNumber){
    }
    else if (wantLower && wantUpper && !wantSymbol && wantNumber){
    }
    else if (wantLower && wantUpper && wantSymbol && !wantNumber){
    }
  }




// // Letters
// letters=
// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
}
