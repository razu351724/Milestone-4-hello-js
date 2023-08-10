function findAddress(obj){  
    if (typeof obj !== 'object'){
        return " please provide me a valid object"}
    if(street == '' || house == '' || society == ''){
        const street = obj.street || '_';
        const house = obj.house || '_';
        const society = obj.society || '_';
        
        return `${street},${house},${society}`;
    }
    if(typeof obj == 'object'){
        const arryValues = Object.values(objetArry)
        return arryValues
    }
    
    else{
        const street = obj.street || '_';
        const house = obj.house || '_';
        const society = obj.society || '_';
        
        return `${street},${house},${society}`;
    }
}

const objetArry ={
    street:10,
    
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