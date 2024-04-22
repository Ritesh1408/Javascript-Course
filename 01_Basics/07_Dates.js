// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object type

// let createDate = new Date(2024, 0, 25)
// let createDate = new Date(2024, 0, 25, 5, 4)
let createDate = new Date("2024-01-14")

console.log(createDate.toDateString());
console.log(createDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})



