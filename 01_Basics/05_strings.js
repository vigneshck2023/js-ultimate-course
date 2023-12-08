const name = "Vignesh"
const repoCount  = 10;
//This is not a good way to write
// console.log(name + " 10" + " count");
//instead we can use back ticks (String Interpolation)
/*
1) Placeholders are created while using the backticks, so we can inject the values, it enhances the readability of the code
 */
// console.log(`Hello my name is ${name} and I have ${repoCount} repository on my github`);

//Ways to declare a string
//1
//String Literal -> It is the most common way to declare a string using double quotes or single quotes
const num1 = "Vignesh";
// console.log(num1);

//2
//String Constructor -> we use String constructor to create a string object
const num2 = new String('vignesh');
// console.log(num2);

// console.log(num2[2]); // Using Square brackets we will be able to access each character

// console.log(num2.__proto__) //prototypes
// console.log(num2.length) // total length
// console.log(num2.charAt(2)); // which character is present in the given index
// console.log(num2.indexOf('n')); // what is the index of the specific character

let sample = "Vignesh"; //stack memory
// console.log(sample.toUpperCase);
// console.log(sample)
const newString = sample.substring(0,4); // we cannot give -ve values in substring
// console.log(newString); //note that the character which is present in the 4th index is not being included

const anotherString = sample.slice(-1,4) //we can give -ve values in slice method
// console.log(anotherString);
let nameSlice = "Vignesh";
let sliceName = nameSlice.slice(-6,4);
console.log(sliceName);

//Slicing Positive Indexing and Negative Indexing -> https://excalidraw.com/#json=KyLPJS-lFK597nv-kjWKG,Hro2m8_tyCtzQsSPWmwqJA
let name1 = "Manav";
let slicename = name1.slice(-5,3)
console.log(slicename);

const Name = "  Vignesh  ";
console.log(Name);
console.log(Name.trim()); //trim() is used to trim the extra space
