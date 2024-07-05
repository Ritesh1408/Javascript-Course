// singleton

// Object.create // constructor method

//symbol
const mySym = Symbol("Key1")

// object Literals
const jsUser = {
    name: "Ritesh",
    "Full name": "Ritesh Roushan",
    [mySym]: "key2",
    age: 20,
    location: "Patna",
    email: "ritesh@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Mon", "Sat"]
};

// to access the object
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full name"]);
console.log(jsUser[mySym]);

jsUser.email = "ritesh@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "ritesh@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());



