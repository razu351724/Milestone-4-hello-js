function milesToKilemeter(miles){
    const kilometr = miles * 1.609;
    return kilometr;
}

const studentmiles = 8;
const studentkilometr = milesToKilemeter(studentmiles);
console.log( studentkilometr)

const officemiles = 10;
const offichKilometr = milesToKilemeter(officemiles);
console.log('offich ato kilometr :', offichKilometr)