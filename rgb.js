/*
The rgb function is incomplete. Complete it so that passing in RGB 
decimal values will result in a hexadecimal representation being 
returned. Valid decimal values for RGB are 0 - 255. Any values that 
fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand 
with 3 will not work here.
*/

/*Got help on geeksforgeeks on this one
Declare red blue green values as Math.round(color)

Create array 0-9 abcdef

Check if values are convertible, else convert to closest values
  >255 convert to 255
  <0 convert to 0
  
To convert base10(<255) to hex,  
divide the base 10 number

let the rounded to the next divison
multiplies the remainder 




*/


function rgb(r, g, b){
  let hex = [0,0,0,0,0,0]
  let answer = ""
  let base16 = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",]
  
  if (r>255) r = 255
  if (r< 0) r = 0
  if (g>255) g = 255
  if (g< 0) g = 0
  if (b>255) b = 255
  if (b< 0) b = 0
  
  hex[1] = base16[(r%16)]
  hex[0] = base16[((Math.floor(r/16)%16))]
  hex[3] = base16[(g%16)]
  hex[2] = base16[((Math.floor(g/16)%16))]
  hex[5] = base16[(b%16)]
  hex[4] = base16[((Math.floor(b/16)%16))]

  for (let dec of hex){
    answer += dec
  }
  return answer
}





const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("Basic Tests", () => {
    Test.assertEquals(rgb(0, 0, 0), '000000')
    Test.assertEquals(rgb(0, 0, -20), '000000')
    Test.assertEquals(rgb(300,255,255), 'FFFFFF')
    Test.assertEquals(rgb(173,255,47), 'ADFF2F')
  });
});

//Ideal Case
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// Other
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}