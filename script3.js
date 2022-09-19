// Initialize a variable for the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

  
//Declare an object called params as "const" since these wont ever change
  
  const params = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }

  //Declare variables for where the password gets written to and the length requested
      const passwordBox = document.getElementById("password");
      const length = document.getElementById("length");


  //let's build a function to generate the password    
  function generatePassword() {

      //let's make variables that keep track of which parameters were selected.

      const upper = document.getElementById("upperCase").checked;
      const lower = document.getElementById("lowerCase").checked;
      const number = document.getElementById("number").checked;
      const symbol = document.getElementById("symbol").checked;
 

  //lets concatenate into a single long search string based on
  //which parameters were selected.

  var searchString = "";

  if (upper == true) 
  {var searchString = params.upperCase;}

  if (lower == true)
  {var searchString = searchString + params.lowerCase;}

  if (number == true) 
  {var searchString = searchString + params.number;}

  if (symbol == true)
  {var searchString = searchString + params.symbol;}

  //logging below to check variables changing as expected
  console.log(searchString);
  console.log(searchString.length);


    //check to see if at least one parameter is checked, if not
    //display an alert.
    if (upper + lower + number + symbol === 0) {
      alert("Please check at least one box!");
      return;
    }
       //check length because html validation doesn't seem to be working
       //logging to check length variable is getting captured correctly
      console.log(document.getElementById("length"));

       if ( length.value < 8 || length.value > 128 ) {
        alert("Please choose a length within range 8 - 128.");
        return;
      }
    
    //Here's where the magic happens. While loop keeps adding characters
    //to the password variable randomly based on the length of the entire 
    //search string until the desired length is reached.
      let password = "";

    while (length.value > password.length) {
      let charToAdd = searchString[Math.floor(Math.random() * searchString.length)];
      if (charToAdd) {
        password += charToAdd;
      }
    }
    //Displays password in passwordBox 
    passwordBox.textContent = password;
    //Password was set successfully, final step is to light up green dropshadow!
    bigShadow();

  }

  //EXTRA STUFF
  // Wrote a function to change the drop shadow style on the main card on click
  // so user gets additional visual cue that password was successfully created.
  function bigShadow() {
    document.querySelector(".card").setAttribute("style", "box-shadow: 0px 30px 14px 14px #99ff99")
    }
