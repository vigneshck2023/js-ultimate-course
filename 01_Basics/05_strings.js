const name = "Vignesh"
const repoCount  = 10;
//This is not a good way to write
// console.log(name + " 10" + " count");
//instead we can use back ticks (String Interpolation)
/*
1) Placeholders are created while using the backticks, so we can inject the values, it enhances the readability of the code
 */
console.log(`Hello my name is ${name} and I have ${repoCount} repository on my github`);

//Ways to declare a string
//1
//String Literal -> It is the most common way to declare a string using double quotes or single quotes
const num1 = "Vignesh";
console.log(num1);

//2
//String Constructor -> we use String constructor to create a string object
const num2 = new String('vignesh');
console.log(num2);

// console.log(num2[2]); // Using Square brackets we will be able to access each character

// console.log(num2.__proto__) //prototypes
// console.log(num2.length) // total length
console.log(num2.charAt(2)); // which character is present in the given index
console.log(num2.indexOf('n')); // what is the index of the specific character