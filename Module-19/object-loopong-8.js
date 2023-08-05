//array vs object
let shoppingCart = {
    books:3,
    snglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    
}

let keys= Object.keys(shoppingCart)
console.log(keys)

// let values = Object.values(shoppingCart)
// console.log(values)

// let keys = [ 'books', 'snglass', 'keyboard', 'mouse', 'pen', ]
for(let i=0; i<keys.length; i++){
    let propertyName = keys[i];
    let propertyVelus = shoppingCart[propertyName];
    // console.log(propertyName,propertyVelus)

}

// for in loop 
for(let propertyName in shoppingCart){
    let value =shoppingCart[propertyName];
    console.log(propertyName, value)
}