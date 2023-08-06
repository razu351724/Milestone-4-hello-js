const phones = [
    { name: 'sumsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    { name: 'walton', camera: 12, storage: '32gb', price: 22000, color: 'silver'},
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver'},
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'}
]

function cheapestphone(headset){
    for(let i = 0; i<headset.length; i++){
        const mobile = headset[i];
        console.log(mobile)
    }
}

const myselection = cheapestphone(phones);