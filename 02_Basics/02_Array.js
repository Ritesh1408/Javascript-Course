// Arrays - Day-2

const marvel_heroes = ["Thor", "IronMan", "SpiderMan"]
const DC = ["SuperMan", "Flash", "Batman"]

// marvel_heroes.push(DC)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// marvel_heroes.concat(DC)
const newHero = marvel_heroes.concat(DC)
// console.log(newHero);
// console.log(marvel_heroes);

//spread method to add two arrays
const allNewHeros = [...marvel_heroes, ...DC]
// console.log(allNewHeros);

const img_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_Array = img_array.flat(Infinity)
console.log(real_Array);

console.log(Array.isArray("Ritesh"));
console.log(Array.from("Ritesh"));

console.log(Array.from({name : "Ritesh"})); // intresting facts
// write array in key value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



