/**
Problem Statement
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). 
Example 1:
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.

Constraints:
-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"
 */

function createCounter(n: number): () => number {
  // instantiated a variable val with value as n - 1
  let val: number = n - 1;
  return function () {
    // now every time the inner functon is called, we increase val by 1
    val++;
    // first time return will return n as required and subsequent return are +1
    return val;
  };
}

module.exports = createCounter;
