// *********** Memory in data types**************

// stack(Primitive), Heap (Non - primitive)
// copy of value , Refrence of original value

let myName = "rroushan"

let anothername = myName
anothername = "Chai or code"
console.log(myName);
console.log(anothername);


let user = {
    email: "user@gmail.com",
    upi: "a@ybl"
}

let user2 = user
user2.email = "ritesh@gmail.com"

console.log(user.email);
console.log(user2.email);

