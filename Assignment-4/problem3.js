function sortMaker(arr) {
    if (arr.some(num => num < 0)) {
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
const arr = [4,-2]
console.log(sortMaker(arr))