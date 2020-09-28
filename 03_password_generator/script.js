// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // Promt for password parameters.
  function generatePassword() {
    var confirmLowercase = (confirm("Would you like lowercase letters in your password?"));
    var confirmUppercase = (confirm("Would you like uppercase letters in your password?"));
    var confirmSpecialChar = (confirm("Would you like special characters in your password?"));
    var confirmNumeric = (confirm("Would you like numbers in your password?"));
    var confirmLength = (prompt("How many characters would you like your password to contain?"));
      // Loops if at least one is not selected, or password does not meet requirement length.
      while(confirmLength <=7 || confirmLength>=129) {
        alert("Password must be between 8-128 characters in length. Please enter a value between 8 and 128.");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
      }
      while(confirmLowercase === false && confirmUppercase === false && confirmSpecialChar === false && confirmNumeric === false) {
        alert("You must choose at least one parameter.");
        var confirmLowercase = (confirm("Would you like lowercase letters in your password?"));
        var confirmUppercase = (confirm("Would you like uppercase letters in your password?"));
        var confirmSpecialChar = (confirm("Would you like special characters in your password?"));
        var confirmNumeric = (confirm("Would you like numbers in your password?"));
      }
      //Declaring variable values inside arrays.
       
    var charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var charUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var charSpecialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    var charNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  

    var passwordCharacters = []
    // Empty string to be filled from arrays.
    var randomPassword = ""
      if (confirmLowercase) 
        for (var i = 0; i <= confirmLength; i++) {
          randomPassword = randomPassword + charLowercase[Math.floor(Math.random() * charLowercase.length)];
            console.log(randomPassword);
    }
      if (confirmUppercase) 
        for (var i = 0; i <= confirmLength; i++) {
          randomPassword = randomPassword + charUppercase[Math.floor(Math.random() * charUppercase.length)];
            console.log(randomPassword);
    }
      if (confirmSpecialChar) 
        for (var i = 0; i <= confirmLength; i++) {
          randomPassword = randomPassword + charSpecialChar[Math.floor(Math.random() * charSpecialChar.length)];
            console.log(randomPassword);
    }
      if (confirmNumeric) 
        for (var i = 0; i <= confirmLength; i++) {
          randomPassword = randomPassword + charNumeric[Math.floor(Math.random() * charNumeric.length)];
            console.log(randomPassword);
    }
      // This needs work to consolodate all random generations.
      for (var i = 0; i <= confirmLength; i++) {
        randomPassword[Math.floor(Math.random())];
          console.log(randomPassword);
    }


    return randomPassword;
  }


    