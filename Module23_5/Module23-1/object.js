// Object টি এর কোনো একটি প্রাপাটির মান object এরে অথবা object হতে পারে
const nayok = {
    name:'Sakib khan',
    id:121,
    act: function(){
        console.log('acting like sakib khan')
    },
    adderss:'movie cinema',
    isSingle:true,
    friends:['Apu', 'Raaz', 'Salman', 'aamir'],
    movies:[{name: 'no.1',year:2015},{name:'king khan',year:2018}],
    car:{
        brand:'tesla',
        price:500000,
        made:2025,
        manufacturer:{
            name:'tesla',
            ceo:'Elon Mask',
            country: 'USA'
        }
    }
}
// console.log(student.car)
// console.log(nayok.act)

nayok.act()