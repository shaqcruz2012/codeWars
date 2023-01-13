// Write a function that accepts an array of 10 integers (between 0 and 
// 9), that returns a string of those numbers in the form of a phone 
// number.
    
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// => returns "(123) 456-7890"
    
    function createPhoneNumber(numbers){
        //numbers.splice(index,0, char)
        let str = ""
        numbers.splice(6,0, "-")
        numbers.splice(3,0, ") ")
        numbers.splice(0,0,"(")
        
        for (let char of numbers) str += char
        return str
      }
      
      const chai = require("chai");
      const assert = chai.assert;
      chai.config.truncateThreshold=0;
      
      describe("Create Phone Number", () => {
        it("Fixed tests", () => {
          assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
          assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
          assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
        });
      });
      
      //***IDEAL****************
      function createPhoneNumber(numbers){
        var format = "(xxx) xxx-xxxx";
        
        for(var i = 0; i < numbers.length; i++)
        {
          format = format.replace('x', numbers[i]);
        }
        
        return format;
      }
      
      function createPhoneNumber(numbers){
        numbers = numbers.join('');
        return '(' + numbers.substring(0, 3) + ') ' 
            + numbers.substring(3, 6) 
            + '-' 
            + numbers.substring(6);
      }
      
      