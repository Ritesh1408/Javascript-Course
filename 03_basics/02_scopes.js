// scopes

// global scope
// var c = 300
let a = 300

// block scope
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // c = 30 
    // console.log("let IN : ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//nested Scope

//parent
//child function can access parent  variable
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        // username is accessible becoz it works for two as global variable
        console.log(username);
        
    }
    // can't accees becoz this variable is out of scope
    // console.log(website);
    two()
}

// one();

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// not access , its not global access
// console.log(username);

// +++++++++++ Intresting ++++++++++++++

// hoisting
    // a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

function addone(num){
    return num + 1
}

addone(5)


// cannot acceessible before declaration 

const addtwo = function(num){
    return num + 2
}
addtwo(5)



