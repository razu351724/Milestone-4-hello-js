function canPay(changeArray,totalDue) {
    
    const result = changeArray.reduce((sum,value) => {return sum +value});
    
    if (result >= totalDue) {
        return true;
    } else {
        return false;
    }
}
const numArry = [1,8];
const number = 12;
console.log( canPay(numArry,number))