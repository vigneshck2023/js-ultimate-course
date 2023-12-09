const accountId= 1445522
let accountemail= "vigneshck2003@gmail.com"
var accountPassword = "12345"
accountCity = "Kerala"
let account;
var acc1;

// accountId = 3; // when we use const keyword, the value which is defined already is kept fixed, and it cannot be changed.
/*
Prefer not to use var keyword because of the block scope and functional scope issue
functional scope:- Variables that is declared inside a function.
Block scope:- This scope restricts the variables inside a specific block.
*/
accountemail  = "vigneshck2003.code@gmail.com";
accountPassword = "1445";
console.log(accountemail);
console.log(accountCity);
console.table([accountId,accountPassword,accountCity,accountemail,account,acc1])