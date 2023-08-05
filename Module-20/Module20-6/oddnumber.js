const myNumbers = [12, 65, 45, 78, 32, 45, 91];

function getoddNumbersofAnArray(numbers){
        for(let i = 0; i< numbers.length; i++){
            const index = i;
            const element = numbers[index];
            if(element % 2 !== 0){
                console.log(index,element)
            }
        }
}

      getoddNumbersofAnArray(myNumbers);
      