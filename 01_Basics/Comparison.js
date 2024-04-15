// console.log(2>1);
// console.log(2<=1);

// console.log("2" > 1);
// console.log("05" > 4);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the reason is that an equality check == and comparisons > <> =
// <= work differently.
// Comparisons convert null to a number , treating it as 0.
// thats why (3) null >= 0 is true and 
// (1) null >0 is false.

console.log(undefined == 0);
// avoid these types of conversion
// when u compare undefined in any like 
// >= <= == or = you get the false value.

console.log("5" === 5);

// stict check ===
// in strict check , check data types not the conversion of 
// given data or converted 

