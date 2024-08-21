console.log("This is lists.js");

let array1 = [1, 2, 3];
console.log(`array1: [${array1}]`);
console.log();

console.log("Delete 3 from array1");
array1.pop();
console.log(`array1: [${array1}]`);
console.log();

console.log("Append 4 to array1");
array1.push(4);
console.log(`array1: [${array1}]`);
console.log();

console.log("Append 5 to array1");
array1.push(5);
console.log(`array1: [${array1}]`);
console.log();

console.log("Remove 4 from array1");
array1.splice(2, 1);
console.log(`array1: [${array1}]`);
console.log();

console.log("Prepend 40 in array1");
array1.splice(0, 0, 40);
console.log(`array1: [${array1}]`);
console.log();