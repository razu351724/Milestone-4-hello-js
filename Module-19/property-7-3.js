let shoppingCart = {
    books:3,
    snglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}

let propertyName ='mouse'

// let propertyName = Object.keys(shoppingCart)
// let propertyVelus = Object.values(shoppingCart)
// console.log(propertyVelus,propertyName)

//system-One
shoppingCart.mouse = 15;
console.log(shoppingCart);

//system-Tow
shoppingCart['mouse']=29;
console.log(shoppingCart)

//system-Three
shoppingCart[propertyName] = 99;
console.log(shoppingCart)