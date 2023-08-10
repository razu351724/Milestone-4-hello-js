            // ChatGPT code

function matchFinder(string1, string2) {
   
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Data is not valid.";
    }
    
   
    const lowerString1 = string1.toLowerCase();
    const lowerString2 = string2.toLowerCase();
    
    
    if (lowerString1.includes(lowerString2)) {
        return true;
    } else {
        return false;
    }
}
console.log(matchFinder('Peter Parker','pet'))


// _________________________________________
function matchFinder(string1, string2) {
    // Check if the input strings are valid
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Data is not valid.";
    }
    
    // Convert both strings to lowercase for case-insensitive matching
    const lowerString1 = string1.toLowerCase();
    const lowerString2 = string2.toLowerCase();
    
    // Check if string2 is a substring of string1
    if (lowerString1.includes(lowerString2)) {
        return true;
    } else {
        return false;
    }
}
console.log(matchFinder('Peter Parker','E'))