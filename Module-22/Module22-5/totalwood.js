/**
 fixed: per item wood requirements.
 1. chair --> 3 cft.
 2. table --> 10 cft.
 3. bad ---> 50 cft.
 vary: quantity
 */

 function woodcalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTablewood = 10;
    const perBedWood =50;

    const chairwood = chairQuantity * perChairWood;
    const tablewood = tableQuantity * perTablewood;
    const bedwood = bedQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity)

    const totalwood = chairwood + tablewood + bedwood;
    return totalwood;

 }
 const totalWood =woodcalculator(2,3,5);
 console.log('total wood required:', totalWood)