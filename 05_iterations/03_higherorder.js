// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

//for of loop

for (const num of arr) {
    // console.log(num);
    
}

const greet = "Hi, there!!!"
for (const i of greet) {
    // console.log(i);
}

// maps

const map = new Map()
map.set('A' , '97')
map.set('B', '98')
map.set('IN', 'INDIA')
// console.log(map);

//Array destructure
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// object in forof loop

const obj = {
    'H' : "Hello",
    'K' : "Kite"
}

for (const [key, value] of obj) {
    // console.log(key, ':-', value);
    
}
// object is not iterable









