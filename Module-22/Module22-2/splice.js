const friends = [ 12, 45, 32, 22, 44, 62, 29, 69, 87]

// Removes elements from an array and,
// if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array.
// splice (২,৫): তুমি কোন জায়গা থেকে কাটা শুরু করবা
// এবং কোথায় শেষ করবা  stated-end 
const partial = friends.splice(2,3 );
console.log(partial);
console.log(friends);
