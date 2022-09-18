// Assignment Code
var generateBtn = document.querySelector("#generate");

// passwordText.value = password;

console.log(document.querySelector("#password"));

// Write a function to change the drop shadow style on the main card on click
// so user gets additional visual cue that password was successfully created.

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
//generateBtn.addEventListener("click", bigShadow);



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");



  
  //first declare an object called params as "const" since these wont ever change
  
  const params = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }

  //Next declare an array called getParam that includes functions for 
  //each kind of parameter. Later we'll randomly select one of these
  //to choose a character for our password.

  const getParams = [
    function upperCase() {
      return params.upperCase[Math.floor(Math.random() * params.upperCase.length)];
    },
    function lowerCase() {
      return params.lowerCase[Math.floor(Math.random() * params.lowerCase.length)];
    },
    function number() {
      return params.number[Math.floor(Math.random() * params.number.length)];
    },
    function symbol() {
      return params.symbol[Math.floor(Math.random() * params.symbol.length)];
    }
  ];

  //now let's validate we have at least one parameter selected and 
  //generate the password.

  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    //check to see if at least one parameter is checked, if not
    //display an alert.
    if (upper + lower + number + symbol === 0) {
      alert("Please check at least one box!");
      return;
    }
    const passwordBox = document.getElementById("password");
    const length = document.getElementById("length");

       //check length because html validation doesn't seem to be working
       if ( length.value < 8 || length.value > 128 ) {
        alert("Please choose a length within range 8 - 128.");
        return;
      }
      console.log(document.getElementById("length"));

    let password = "";

    while (length.value > password.length) {
      let paramToAdd = getParams[Math.floor(Math.random() * getParams.length)];
      let isChecked = document.getElementById(paramToAdd.name).checked;
      if (isChecked) {
        password += paramToAdd();
      }
    }
     
    passwordBox.textContent = password;
    //Password was set successfully, final step is to light up green dropshadow.
    bigShadow();

  }
  function bigShadow() {
    document.querySelector(".card").setAttribute("style", "box-shadow: 0px 30px 14px 14px #99ff99")
    }
