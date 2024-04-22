
// nums and maths in js

const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toPrecision());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); 
// to fixed large number in calculation // 100.00

const otherNum = 123.8966

console.log(otherNum.toPrecision(4));
const hundreds = 100000000

console.log(hundreds.toLocaleString(`en-IN`));

// ************** Maths *********************//

console.log(Math);
console.log(Math.abs(-11));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 5, 8));
console.log(Math.max(11, 2, 55, 0));

// Random function
console.log(Math.random()); // value b/w -- 0 and 1
console.log(Math.random()*10 + 1);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

// Math.random()
console.log(Math.floor(Math.random() * (max-min+1)) + min);

// to get min value -- use floor function



