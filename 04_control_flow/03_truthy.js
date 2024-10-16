// const userEmail = "ritesh@gmail.com";
const userEmail = []

if(userEmail){
    // console.log("got mail");
    
}else{
    // console.log("dont have mail");
    
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values --- inside string is said to be turthy values
// "0", 'false', " ", [], {}, function (){}, 

if(userEmail.length === 0){
    // console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
    
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish coalescing opeartor (??) : null , unrefined 

let val1;
// use to handle error when u call DB
// val1 = 5 ?? 10
val1 = null ?? 10

// console.log(val1);

//Terniary operator
//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");







