// function in JS

// console.log("h");
// console.log("i");
// console.log("i");


function saymyName() {
    console.log("Hello JS user");
    
}

// saymyName();

//add two numbers
// when we passing var name called Parameter
function addTwoNum(a, b){
    let c = a+b;
    console.log(a+b);
    
    // console.log(c);
    
}

// calling function
// said to be an arguement
// addTwoNum(5,8);

//when we use to declare var and try to store the val,
// then o/p is undefined because console only print the val not return anything


// create var and return the value
// store in a variable
function addTwoNum(a, b){
    // let result = a + b
    // return result

    return a+b
    
}
// const v = addTwoNum(8,8)
const res = addTwoNum(5,6);
// console.log("result : ", res);
// console.log("v",v);

// if you dont want to blank or empty then just passed the username = "sam", if wanna changed the name just call with the function, it will overide
function loginUserMessage(username){
    if(!username){
        console.log("Please enter the userName");
        return
        
    }
    return `${username} just Logged In`
}

loginUserMessage("Ritesh") // just return the val but doesnt print anything
// console.log(loginUserMessage("Ritesh")); // print
 // when user not pas the val, return undefined
// console.log(loginUserMessage());


//part -2
// rest operator ...num or also called spread operator
//depend upon use cases
// using this can pass more val at atime and return array
function calculatePrice(v1, v2, ...num1){
    return num1
}

// console.log(calculatePrice(200, 400, 800, 1000));

const user = {
    username : "Hitesh",
    prices : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user);
handleObject({
    username : "sam",
    price : 399
})

//array in function
 const arr = [200, 400, 100, 600]

 function returnsecondValue(getArray){
    return getArray[1]
 }

 console.log(returnsecondValue(arr));

 console.log(returnsecondValue([100,800,250]));
 
 








