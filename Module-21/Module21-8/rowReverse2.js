function reverseString(tex){
    // for(let i = 0; i < tex.length; i++){}
    let reversed = ''
    for(let i = tex.length-1; i >= 0; i--){
        const element = tex[i];
        reversed = reversed + element
        console.log(element, reversed)
    }
    return reversed;
}

const myStrin = 'I am good boy';
const reversed = reverseString(myStrin)
console .log('reversed output:', reversed)