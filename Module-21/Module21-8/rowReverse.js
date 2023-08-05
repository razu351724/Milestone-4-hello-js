function reverseString(tex){
    // for(let i = 0; i < tex.length; i++){}
    for(let i = tex.length-1; i >= 0; i--){
        const element = tex[i];
        console.log(element)
    }
}

const myStrin = 'I am good boy';
const reversed = reverseString(myStrin)