// কোনো একটি year কে ৪ দিয়ে ভাগ শেষ বের করলে ভাগ শেষ যদি ০ হয়
// তাহলে সেই বছর   leap year ( 1952 % 4 =0 )

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year :', year)
    }
    else{
        console.log('Your year is not a leap year :',year)
    }
}
isLeapYear(2032)