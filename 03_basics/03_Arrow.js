// Arrow function and This keyword

const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // return this function
        console.log(this);
        

        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// return empty object
// global not declared anything
// console.log(this);

// function chai(){
//     let username = "hitesh"
//     // console.log(this.username);
    
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addtwoNum = (num1, num2) => {
//     return num1 + num2
// }

// implicit return karega
// const addtwoNum = (num1, num2) => num1 + num2

// no need to use return keyword
// specially react
const addtwoNum = (num1, num2) => (num1 + num2)

console.log(addtwoNum(5,6));



