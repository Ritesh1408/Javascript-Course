const accountId = 1445
let accEmail = "ritesh@gmail.com"
var accPassword = "12345"

accCity = "Patna" 

let accState;
// when u define variables without assign value
// it will be undefined value in js

// when u declaring variables using const 
// Not allowed to change it
// accountId = 1444

accEmail = "hchc@gmail.com"
accPassword = "456321"
accCity = "Solan"

console.log(accountId);

/*
prefer not to use var
becoz of issue in block scope and functional scope

*/

//to print multiple items same time at one command
console.table([accountId, accEmail, accPassword, accCity]);


