// Array i jS

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Thor", "Ironman", "Baalveer", "Chhota bheem"]

const myArr2 = new Array(1,2,3,4,5,6)
console.log(myArr[0]);
console.log(myArr[2]);

//methods in Array
myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop()

myArr.unshift(9) // to add element in front / first idx of an Array without shifting the element inside the array

myArr.shift() // delete the first index element in the array / added first element in the unshifted array


console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

//slice, splice

console.log("A", myArr);
const myN1 = myArr.slice(1,3)

console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myN2);

//Note : -
// in slice, only range of array is included , and give op

// but in case of splice, original array is manipulated and change the original array



