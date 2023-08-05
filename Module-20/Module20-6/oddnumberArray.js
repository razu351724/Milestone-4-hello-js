function getoddNumbersofAnArray(numbers){
        const oddNumber = []
        for(let i = 0; i< numbers.length; i++){
            const index = i;
            const element = numbers[index];
            if(element % 2 === 1){
                console.log(index,element)
                oddNumber.push(element);
            }
        }
        return oddNumber;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumber = getoddNumbersofAnArray(myNumbers);
console.log(oddNumber)

const oddNumberSum = getoddNumbersofAnArray(oddNumber);
console.log('odd number sum', oddNumberSum)
      