const num = 1;
const obj = {};
const arr = [];
function func() {
  return 1;
}
const regExp = /^[0-9]+$/;

console.log(num instanceof Object); // false
console.log(obj instanceof Object); // true
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(regExp instanceof Object); // ture

console.log(typeof num); // number
console.log(typeof obj); // object
console.log(typeof arr); // object
console.log(typeof func); // function
console.log(typeof regExp); // object
