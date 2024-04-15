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

