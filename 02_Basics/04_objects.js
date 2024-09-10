// const tinder = new Object(); // singleton

const tinder_1 = {}; // non singleton

tinder_1.id = "123abc"
tinder_1.name = "Sam"
tinder_1.isLoggedIn = false;


// console.log(tinder_1);
// tinder_1.isLoggedIn = true;

// console.log(tinder_1);

//we can use as nested object
const user = {
    email : "abc@gmail.com",
    fullname : {
        userFullname : {
            firstname : "ritesh",
            lastname : "roushan"
        }
    }

}

// console.log(user.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2 }

// console.log(obj3);

// using assign method, we can put the source object in the target object
// {} using this can confirm that output should returned in the target object.
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// using spread operator to merge the object
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// array like 

const users = [
    {
        id:1,
        email : "abcd@gmail.com"
    }
]

// users[1].email

console.log(tinder_1);

// we can use keys and values, where the op is Array

// console.log(Object.keys(tinder_1));
// console.log(Object.values(tinder_1));
// console.log(Object.entries(tinder_1));

// console.log(tinder_1.hasOwnProperty('isLoggedIn'));

// console.log('name' in tinder_1);

//destructure objects

const course = {
    coursename : "Js in Hindi",
    price : "999",
    courseIntructor : "hitesh"
}

// course.courseIntructor

const {courseIntructor : instruct} = course

console.log(instruct);


// API and JSON
 {
    "course" : "JS Hindi",
    "intructor" : "Hitesh",
    "price" : "of course free"
 }

 [
    {},
    {},
 ]















