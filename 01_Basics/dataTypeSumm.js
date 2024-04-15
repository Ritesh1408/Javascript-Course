// ## primitive 

// 7 types : string, Number, boolean, null, undefined 
// symbol, BigInt

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsudeTemp = null
let userEmail; // == undefined 

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);

const bigNum = 452456655566555n


//refrence type (Non primitive)
// Array, objects, Functions
// dynamically typed language -- dont need to describe type 
// of data. 
// typeScript


const heros = ["Thor", "ChhotaBheem", "Shaktiman"];

//object type
let myObj = {
    name : "ritesh",
    age : 22,
}

const myFunc = function(){
    console.log("Hello World");
}

myFunc();

//function typeof is function object
/**
There are 2 types of datatype
1. Primitive datatype:-
    1.String
    2. Number
    3. Boolean (true / false)
    4. null (iska matlab hai empty or zero nahi hai)
    5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
    6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
    7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

2. Preference datatype (Non Primitive datatype)
    1. Array ( [ ] )
    2. Object ( { } )
    3. Function ( function( ){ } )

 */
