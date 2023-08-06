const phones = [
    { name: 'sumsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'walton', camera: 12, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver'},
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'}
]

function cheapestphone(headset){
    let cheapest = headset[1];
    for(let i = 0; i<headset.length; i++){
        const mobile = headset[i];
        if(mobile.price <cheapest.price){
            cheapest = mobile;
        }
    }
     return cheapest;
}

const myselection = cheapestphone(phones);
console.log(myselection)