// const score = 400;
// console.log(score);
const balance = new Number(4000) //Number constructor (type: object)
// console.log(balance.toString);
// console.log(balance.toString().length);
//The number which is given is treated as characters when it is given inside an object, so 4000:- output will be 4

// console.log(balance.toFixed(2));
//toFixed:- It returns all the digits after the decimal point
// console.log(balance.toPrecision(5));
//toPrecision:- It returns all the digits before and after the decimal point and it will get rounded up
// console.log(number.toString.length);

const hunderds = 10000000;
// console.log(hunderds.toLocaleString('en-IN')) //comma according to Indian Standards

//+++++++++++++++++++++++++++++Math++++++++++++++++++++++++++
// console.log(Math.abs(-4)); //absolute value changes the -ve value to positive
// console.log(Math.round(4.5)) //rounds the number
// console.log(Math.ceil(5.2)) //uppermost value
// console.log(Math.floor(4.2)) //lowermost value
// console.log(Math.min(4,6,3,2)); //selects the minimum value
// console.log(Math.max(4,6,3,2)); //selects the maximum value

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10) +1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1))+min)
console.log((0.0134566*10)+1);