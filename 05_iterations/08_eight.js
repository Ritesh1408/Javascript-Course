// Reducer or reduce

/**
 * const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
Expected output: 10
 */

const Nums = [1, 2, 3]

const myTotal = Nums.reduce( function(acc, curVal) {
    console.log(`acc : ${acc} and curVal : ${curVal}`);
    
    return acc + curVal
}, 5);

// const myTotal = Nums.reduce( (acc, curVal) => acc + curVal, 0)

// console.log(myTotal);

const shopingCart = [
    {
        itemName : "Python",
        price : 999
    },
    {
        itemName : "Java",
        price : 499
    },
    {
        itemName : "C++",
        price : 1999
    },
    {
        itemName : "ML",
        price : 2999
    }
]

const Val = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(Val);






