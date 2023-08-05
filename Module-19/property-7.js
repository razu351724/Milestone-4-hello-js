let shoppingCart = {
    books:3,
    snglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
//when you know the specific property name, use dot notation to get the property valus.
// let penCount = shoppingCart.pen;

//alternative system
//When you know the specific property name, use dot notation to get property value
// let penCount2 = shoppingCart['pen'];
let propetes = Object.keys(shoppingCart);
let propertyVelus = Object.values(shoppingCart)
console.log(propetes)
console.log(propertyVelus)


