const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul',
 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'baul', 'abul',]

 function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false)
        unique.push(name);
    }
    return unique;
 }
  
 const upiqueNames = removeDuplicate(names);
 console.log(upiqueNames)