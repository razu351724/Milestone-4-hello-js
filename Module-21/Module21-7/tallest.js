function maxInArray(number){
    for(let i = 0; i <number.length; i++){
        const index = i;
        const element = number[index];
        console.log(element)
    }
}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is:',tallest)