function canPay(changeArray, totalDue) {
    const retailAmount = changeArray.reduce((sum, note) => sum + note, 0);
    
    if (retailAmount >= totalDue) {
        return true;
    } else {
        return false;
    }
}
const numArry = [1,2,5];
const number = 10;
console.log( canPay(numArry,number))



// Test cases
// console.log(canPay([1, 2, 5], 10)); // Output: false
// console.log(canPay([1, 5, 5], 10)); // Output: true
// Save to grepper
// In this code, the canPay function takes two parameters: changeArray (an array of notes) and totalDue (the price of the chips). It calculates the sum of the notes in the changeArray using the reduce function and then compares this sum with the totalDue. If the sum is greater than or equal to the totalDue, it returns true, otherwise, it returns false. The test cases at the bottom demonstrate the usage of the function.