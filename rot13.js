/*
ROT13 is a simple letter substitution cipher that replaces a 
letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string 
ciphered with Rot13. If there are numbers or special characters 
included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
*/


function rot13(str) {
    // Initialize an empty result string
    var result = '';
  
    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {
      // Get the character code of the current character
      var charCode = str.charCodeAt(i);
  
      // Check if the current character is an uppercase letter
      if (charCode >= 65 && charCode <= 90) {
        // Shift the uppercase letter by 13 places
        // 
        // The formula for shifting a letter by n places is:
        // 
        //   ((charCode - 65 + n) % 26) + 65
        // 
        // - charCode is the character code of the letter
        // - 65 is the character code of 'A'
        // - n is the number of places to shift the letter
        // - % 26 is used to wrap around when the letter goes past 'Z'
        // - + 65 is used to offset the result to the correct character code range
        result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
      // Check if the current character is a lowercase letter
      else if (charCode >= 97 && charCode <= 122) {
        // Shift the lowercase letter by 13 places
        // 
        // The formula for shifting a letter by n places is:
        // 
        //   ((charCode - 97 + n) % 26) + 97
        // 
        // - charCode is the character code of the letter
        // - 97 is the character code of 'a'
        // - n is the number of places to shift the letter
        // - % 26 is used to wrap around when the letter goes past 'z'
        // - + 97 is used to offset the result to the correct character code range
        result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      }
      // The current character is not a letter, so append it to the result as is
      else {
        result += str[i];
      }
    }
  
    // Return the result string
    return result;
  }