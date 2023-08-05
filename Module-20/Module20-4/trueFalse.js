// কোনো একটি year কে ৪ দিয়ে ভাগ শেষ বের করলে ভাগ শেষ যদি ০ হয়
// তাহলে সেই বছর   leap year ( 1952 % 4 =0 )

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const isMyYearLeapyear = isLeapYear(2032)
console.log('Is my year Leap :', isMyYearLeapyear )