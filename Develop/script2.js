// Assignment Code


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
      alert("Please check atleast one box!");
      return;
    }
    const passwordBox = document.getElementById("password");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let paramToAdd = getParams[Math.floor(Math.random() * getParams.length)];
      let isChecked = document.getElementById(paramToAdd.name).checked;
      if (isChecked) {
        password += paramToAdd();
      }
    }
    passwordBox.textContent = password;
  }

  var generateBtn = document.querySelector("#generate");

 // passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);






//example

// const keys = {
//     upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//     lowerCase: "abcdefghijklmnopqrstuvwxyz",
//     number: "0123456789",
//     symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
//   }
//   const getKey = [
//     function upperCase() {
//       return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
//     },
//     function lowerCase() {
//       return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
//     },
//     function number() {
//       return keys.number[Math.floor(Math.random() * keys.number.length)];
//     },
//     function symbol() {
//       return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
//     }
//   ];
  
//   function createPassword() {
//     const upper = document.getElementById("upperCase").checked;
//     const lower = document.getElementById("lowerCase").checked;
//     const number = document.getElementById("number").checked;
//     const symbol = document.getElementById("symbol").checked;
//     if (upper + lower + number + symbol === 0) {
//       alert("Please check atleast one box!");
//       return;
//     }
//     const passwordBox = document.getElementById("passwordBox");
//     const length = document.getElementById("length");
//     let password = "";
//     while (length.value > password.length) {
//       let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
//       let isChecked = document.getElementById(keyToAdd.name).checked;
//       if (isChecked) {
//         password += keyToAdd();
//       }
//     }
//     passwordBox.innerHTML = password;
//   }
//   function copyPassword() {
//     const textarea = document.createElement("textarea");
//     const password = document.getElementById("passwordBox").innerText;
//     if (!password) { return; }
//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Password copied to clipboard");
//   }