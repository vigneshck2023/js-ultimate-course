"use strict" // treats all js code as newer version

// alert(3+3) // currently we are using node js, we can use alert in nodejs also but it has different method.
console.log(3
    +
    3) // this is also possible, prefer not to write the code in this manner because the code is not readable and it is not a good coding practice

    console.log(3+4) // code readability is good in this line
console.log("Vignesh");

//Datatypes
let n1 = "Vignesh" // string datatype
console.log(n1,typeof n1);
let age = 18; // number datatype
console.log(age,typeof age);
let isLoggedIn = true; // boolean
console.log(isLoggedIn,typeof isLoggedIn)

/*
    //Primitive Datatypes
    => number
    => bigint
    => string => "" or ''
    => boolean => true/false
    => null => it is a standalone value (it is a datatype also), we can define null
    => undefined => value is not defined
    => symbol => used to find the uniqueness
    ---------------------------------------------
    => object
*/
console.log(typeof null) // type of null -> object
console.log(typeof undefined) // type of undefined -> undefined