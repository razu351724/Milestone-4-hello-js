// Problem - 3
// ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
// এই array তে সবসময় দইুটি উপাদান থাকবে ।
// Task:
// 1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
// করবে ।
// 2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
// 3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
// Input”
// Sample Input Sample Output

// [2,3] [3,2]
// [4,2] [4,2]
// [4,4] equal
// [1,2] [2,1]
// [4,-2] Invalid Input
// বি .দ্র.: 0 কে স্কি প করতে পারে ন। মানে [0,1] এইভাবে থাকলে আপনি [1,0] দি য়ে রি টার্ন করতে পারে ন। আমরা চে ক
// করার সময় এমন ইনপুট দি য়ে চে ক করব ো না।

// Function definition
// function sortMaker(arr) {
// }

function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }if (arr.some(num => num < 0)) {
        return "Invalid Input";
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    if (arr[1] > 0) {
        return arr.sort((a, b) => b - a);
    }

    return arr;
}


const arrNumber = [4,4]
console.log(sortMaker(arrNumber))        