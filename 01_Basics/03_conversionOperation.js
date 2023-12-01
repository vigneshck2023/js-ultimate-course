// let score = "33"
// console.log(typeof score);
// console.log(typeof (score)); --> string datatype

// let score =33;
// console.log(typeof score);
// console.log(typeof (score)); --> Number datatype

// let score = "33";
// let convert = Number(score);
// console.log(score, typeof convert); --> Number to String conversion

// let score = "33ABC"
// let convert = Number(score);
// console.log(typeof convert, convert) --> It will be converting to number but when we check the value which is present it will be showing NaN

// let score = null;
// let convert = Number(score);
// console.log(typeof convert, convert) null --> 0

// let score = undefined;
// let convert = Number(score);
// console.log(typeof convert, convert); --> undefined -> NaN

// let score = true;
// let convert = Number(score);
// console.log(typeof convert, convert) --> true -> 1 and false -> 0

//notes
/*
33 => 33
"33abc => NaN type is Number
true => 1; false => 0 --> boolean
1 => 1 --> number => number
*/

//converting number to boolean
// let isLoggedIn = 1;
// let logged = Boolean(isLoggedIn)
// console.log(logged, typeof logged); 1 -> true 
 
// let LoggedIn = "";
// let log = Boolean(LoggedIn);
// console.log(log) "" -> false

//let logged = "Vignesh";
//let log = Boolean(logged)
//console.log(log); "Vignesh" - > True
//When we convert a String to boolean the answer which we get after we print is true

/*
1 => true 0 => false
"" => false
"Vignesh" => true
*/
// let num = 33;
// let strnum = String(num);
// console.log(strnum);
// console.log(typeof strnum);