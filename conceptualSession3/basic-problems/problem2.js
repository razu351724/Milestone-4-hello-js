/*

ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে
একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। 
যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে 
আর যদি না হয় তাহলে false রিটার্ন করতে হবে 
*/



// function isJavaScriptFile(string){
//     if(typeof string !== 'string'){
//         return "please provide me a valit file name (string).";
//     }
//     else{
//         // if(string.toLowerCase() .endsWith(".js") == true ){
//         //     return true;
//         // }
//         // else{
//         //     return false;
//         // }
//         return string.toLowerCase() .endsWith(".js"); // true || false
//     }
// }

function isJavaScriptFile(string){
    if(typeof string !== 'string'){
        return "please provide me a valit file name (string).";
    }
    else{
       // hell.world.html.js  ফাইলের লাস্টে যা থাকবে তাই হলো ফাইলের এক্সেটনসন,
       // split --> মানে ভাঙ্গা, ফাইলের যেখানে যেখানে (.) সেখানে সেখানে ভাঙ্গবে,
    const arr = string.split('.')
    const lastElement = arr.pop();

    return lastElement.toLowerCase() === "js";
    // if(lastElement.toLowerCase() == "js"){
    //     return true;
    // }else{
    //     return false;
    // }
     }
}
console.log(isJavaScriptFile('hell.world.html.html'));