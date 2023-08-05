function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    // console.log(words);
    for(let i = words.length-1; i>= 0; i--){
        const element = words[i];
        result.push(element)
    }
    const reversed = result.join(' ');
    return reversed;
}

// ভুল আছে রান হচ্ছে না
console.log(reversed) 
const mystring = 'I am a good boy'
reverseWords(mystring)