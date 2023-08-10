const products = [
    {id: 1, name: 'xiami phone one night', price: 1900},
    {id: 2, name: 'A phone one night', price: 1900},
    {id: 3, name: 'B phone one night', price: 1900},
    {id: 4, name: 'C Phone one night', price: 1900},
    {id: 5, name: 'D Phone one night', price: 1900}
]
// for(const itemsProducts of products){
//     console.log(itemsProducts)
// }

function matchedProducts(products, search){
    const matched = []
    for(const items of products){
        if(items.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(items)
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result)