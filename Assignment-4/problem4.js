function findAddress(obj){  
    if (typeof obj !== 'object'){
        return " please provide me a valid object"}
    else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';    
        
        return street+","+house+","+society;
    }
}

const objetArry ={
    street:10,
    house:'15A',
    society:"Earth Perfect"}

    console.log(findAddress(objetArry))

// const name = {
//     name:'razu',
//     rowl:351724,
//     class:'seven',
//     jun: "pronpaly"
// }
// const razu = Object.values(name)
// console.log(razu)