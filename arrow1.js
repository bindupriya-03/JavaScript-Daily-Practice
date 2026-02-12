/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

/*const modifyArray = (nums) => {
    return nums.map((num) => {
        if (num % 2 === 0) {
            return num * 2;
        } else {
            return num * 3;
        }
    });
};*/
  
  
  //another method using ternary operator
  
  const modifyArray = nums =>
    nums.map(num => num % 2 === 0 ? num * 2 : num * 3);

