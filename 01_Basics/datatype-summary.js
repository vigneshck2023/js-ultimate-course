//Types of Datatypes
/*
The difference b/w the datatype is how data is accessed and how the data is stored
1) Primitive Datatype
2) Non Primitive Datatype
*/

//Primitive Datatype
/*
* Call by value -> Values of actual parametre is copied to the function of formal parametre
actual parametre -> Values which are passed in the functions when it is invoked
formal parametre -> Variables defined by the function, that receives values when the function is called.
Number of categories: 7
1) String
2) Number
3) Boolean
4) null
5) undefined
6) Symbol
7) BigInt
*/
//note:- Javascript is a dynamically typed language
//Reference Type or Non Primitive Datatype
/*
1) Array
2) Objects
3) Functions
*/

//Example of Primitive Datatype

//Number
const number =100
const num = 100.3

//Boolean
const isLoggedIn = true
const isLoggedOut = false

//null
const type = null

//undefined
let userEmail = undefined
let user;

//Symbol
/* Even if the value passed is the same but the return type will be different */
const id = Symbol(234);
const id2 = Symbol(234);
console.log(id == id2); 

//BigInt
/* n indicates that the type used is BigInt */
const BigNumber = 123452463242425205n;
console.log(typeof BigNumber);


//Examples of Reference type or Non Primitive Datatype
//Arrays
const life=["Eat","Sleep","Code","Repeat"] 
console.log(life); // This prints the entire array
console.log(life[1]); // This prints the specific element in the array

//Object
const obj = {
    name:"Vignesh",
    age:20,
}
console.log(obj); //Prints the entire elements which is stored inside
console.log(obj.name); // Prints the specific element in an object

//Functions
const myFunctions = function(){
    console.log("Hello World");
}
console.log(myFunctions);