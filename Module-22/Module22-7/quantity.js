// [45, 65, 45, 98]
const shoppingCart =[
    { name: 'shoe', price: 1200, quantity: 2},
    { name: 'shirt', price: 2200, quantity: 5},
    { name: 'pant', price: 3700, quantity: 4},
    { name: 'belt', price: 600, quantity: 3},
]

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const  items = products[i];
        // console.log(items)
        const productTotal = items.price * items.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const totleItems = totalCost(shoppingCart);
console.log('Total  totleItems today:', totleItems )