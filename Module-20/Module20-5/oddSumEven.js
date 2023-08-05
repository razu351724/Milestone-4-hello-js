function gatsumOfAnArray(numbers){
    let gum = 0;
    for(let i=0; i<numbers.length; i++){
        const indexx = i;
        const element = numbers[indexx];
        gum = gum + element;
        console.log(indexx,element,gum);
    }
    return gum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91]
gatsumOfAnArray( myNumbers)