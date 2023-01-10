/*
GoogleFoo'ed this solution.

Lyrics...

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer,
 you can mess with pyramids even if you are not in Egypt at the time. For example, let's 
 consider the following problem. 
 
 Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to 
the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as argument and 
returns its' largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.

By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is 
a bad idea unless you have a few centuries to waste. You must come up with something more 
clever than that.

(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

*/

/* Psuedocode
1) We start at the top of the pyramid (first row) and then move down, row by row.
2) For each element in the current row, we add the maximum of the two elements in the row 
    above it to that element.
3) To find the maximum of the two elements in the row above, we first check whether the 
    current element is on the left or right side of the row above by using a conditional 
    statement.
4) If the current element is on the left side of the row above, we use the element on the 
    left of the current position on the row above( pyramid[i - 1][j - 1])
5) If the current element is on the right side of the row above, we use the element on the 
    right of the current position on the row above (pyramid[i - 1][j])
6)Once we've iterated through all elements of the pyramid we will return the maximum element 
    of the last row.

*/

//Optimized solution O(n)

function longestSlideDown(pyramid) {
    for (let i = 1; i < pyramid.length; i++) {
        for (let j = 0; j < pyramid[i].length; j++) {
            let left = j > 0 ? pyramid[i - 1][j - 1] 
                : 0
            let right = j < pyramid[i - 1].length ? pyramid[i - 1][j] 
                : 0
            pyramid[i][j] += Math.max(left, right)
        }
    }
    return Math.max(...pyramid[pyramid.length - 1])
}

//Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(longestSlideDown(
 [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]]),
  23, "should work for small pyramids");
Test.assertEquals(longestSlideDown(
 [[75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]),
  1074, "should work for medium pyramids");
  });
});

/*
The top-down approach is the most optimized solution in terms of time complexity,
 with O(n), where n is the number of elements in the pyramid. As the problem is 
 asking for the maximum sum from top to bottom, and in a pyramid structure it's 
 important to avoid recalculating the same subproblems multiple times.

However, when it comes to memory usage, this implementation is not the most 
optimized one. The approach I described uses the input pyramid to store the 
results, so the memory usage is O(n) as well, where n is the number of elements 
in the pyramid. If memory usage is a concern, you could use an alternative 
approach that uses a 1D array to store the results and minimize the memory usage 
to O(k) where k is the width of the pyramid's base.

It's worth noting that the specific problem  mentioned, Project Euler 18 and 
67, are meant to be solved efficiently, and will have large inputs, so it's 
important to think about optimization when attempting to solve them.

*/