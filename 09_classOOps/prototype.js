
// let myName = "hitesh      "
// // console.log(myName.length);

// console.log(myName.trueLength);

let myheroe = ["thor", "iron man", "loki"]

let heroPower = {
    thor : "Hammer",
    iron_man : "Suits",
    loki : "magic",

    getlokiPower : function(){
        console.log(`Loki power is ${this.loki}`);
        
    }
}

Object.prototype.ritesh = function(){
    console.log(`Ritesh is present in all objects`);
    
}

Array.prototype.hey = function(){
    console.log(`Hey users`);
    
}

// heroPower.ritesh()
// myheroe.ritesh()
// myheroe.hey()
// heroPower.hey()

// Inheritance

const User = {
    username : "Chai",
    email: "Chai@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport
}

teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher)


let user1 = "helloworld       ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

user1.trueLength()
 


