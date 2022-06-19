function hasTargetSum(array, target) {
  // Write your algorithm here

  // for (const num1 of array) {
  //   for (const num2 of array) {
  //     let totalSumOfNumbers = num1 + num2;
  //     if (totalSumOfNumbers === target) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // return false;
  for (let i = 0; i < array.length; i++) {
    const number = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === number) {
        return true;
      }
    }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
  O(n2) -nested loop
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
   Returns true if any set of two numbers sums up to equal the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
