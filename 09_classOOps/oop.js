// object literal

const user = {
    username : "ritesh",
    logincount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got the user details from DB");
        // console.log(`username : ${this.username}`);
        console.log(this);
        
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor 

// const promiseOne = new Promise()

// const date = new Date()

function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const user1 = new User("ritesh", 12, true)
const user2 = new User("roushan", 11, false)
console.log(user1);
console.log(user1.constructor);

// new - created empty object, constructor function called,
// add into this keyword, return O/P

// instanceof -- mdn docs







