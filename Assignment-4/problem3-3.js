function sortMaker(arr) {
    // Check if any element in the array is negative
    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }

    // Check if both elements are positive
    if (arr[0] > 0 && arr[1] > 0) {
        // Sort the array in descending order
        arr.sort((a, b) => b - a);
        return arr;
    }

    // Check if both elements are equal
    if (arr[0] === arr[1]) {
        return "equal";
    }
}

const arrNum = [4,-2]
console.log(sortMaker(arrNum))