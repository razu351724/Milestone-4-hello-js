// [45, 65, 45, 98]
const shoppingCart =[
    { name: 'shoe', price: 1200},
    { name: 'shirt', price: 2200},
    { name: 'pant', price: 3700},
    { name: 'belt', price: 600}
]

function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const  items = products[i];
        // console.log(items)
        sum = sum + items.price;
    }
    return sum;
}
const totleItems = totalCost(shoppingCart);
console.log('Total  totleItems today:', totleItems )