function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badDate = 0
        for(let item of arr){
            if(typeof item !== 'number'){
                return "please provide me an array of number"
            }else{
                if(item<0){
                    badDate++  // badData = badData + 1; 
                }

            }
        }
        return badDate
    }
}

const x = [1,2,3,4]
console.log(findingBadData(x))