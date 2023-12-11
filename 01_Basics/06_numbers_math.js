// const score = 400;
// console.log(score);
const balance = new Number(4000) //Number constructor (type: object)
console.log(balance.toString);
console.log(balance.toString().length);
//The number which is given is treated as characters when it is given inside an object, so 4000:- output will be 4

console.log(balance.toFixed(2));
//toFixed:- It returns all the digits after the decimal point
console.log(balance.toPrecision(5));
//toPrecision:- It returns all the digits before and after the decimal point
// console.log(number.toString.length);