// বি. দ্র. Assignment এর deadline ভিডিওতে ৬০ নম্বরের জন্য একদিন বলা হয়েছে। কিন্তু বষ্টিৃ এবং
// বিদ্যুৎ সমস্যার কারণে আমরা ৬০ নম্বরের ডেডলাইন ২ দিন অর্থাৎ ১০ আগস্ট রাত ১১:৫৯টা পর্যন্ত রাখছি।
// এবং ৫০ নম্বরের ডেডলাইন ১১ আগস্ট রাত ১১:৫৯টা পর্যন্ত রাখছি।

// Problem - 1(basic math)
// ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
// 2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দি বে ফাংশন থে কে ।
// Sample Input Sample Output
// 3 27
// 4 64

// বি .দ্র.: নে গে টিভ বা ০ এর ক্ষে ত্রে যে হে তুভ্যালি ডে শন এর বি ষয়ে কি ছুবলে নি সে হে তুএইটা ইগন োর করে ন। মানে এইগুল ো
// ইনপুট দি লে cube রি টার্ন করে দে ন। আমরা শুধুপজি টিভ এর জন্য চে ক করে দে খব ো সি স্টে মে ।

// Function signature/sample
// function cubeNumber(number) 

// const number = -8

// const coll  =  number **3
// console.log(coll)

function cubeNumber(number){
    if(typeof number !== 'number'){
         return "please provide a number"
    }
     else{
      
        return number **3
      
    }

}
console.log(cubeNumber(4));

