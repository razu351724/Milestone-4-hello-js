// 1*2*3*4*5*6*7
// যখন তুমি কোনো কিছু যোগ করবা তখন ইনিসিয়াল ভেলু জিরো নিবা;
// যখন তুমি কোনো কিছু গুন  করবা তখন ইনিসিয়াল ভেলু  এক নিবা;

//একে পেনসি ভাবে বলে ফ্যাটোরিয়াল;
// 3! = 3*2*1
// 4! = 4*3*2*1

function multiplicatonOfNumbers(number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result = result * i
    }
    return result;
}

const result = multiplicatonOfNumbers(7)
console.log(result)