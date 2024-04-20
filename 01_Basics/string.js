const name = "ritesh"
const repoCount = 20

// console.log(name + repoCount + " Value");

// use back ticks
// console.log(`Heloo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`rroushan-kumar-com-hello`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf(`s`)); // to check the char index at back

const newString = gameName.substring(1,5);
console.log(newString);

//slice the string
const str = gameName.slice(-5, 2);
console.log(str);


// trim to use delete the extra space in string
// as well as line terminator
const newStringone =`        Roushan     `
// console.log(newStringone);
// console.log(newStringone.trim());

const url = "https://riteshroushan.com/hitesh%20choud"
console.log(url.replace('%20', '-'));

console.log(url.includes('kumar'));

console.log(gameName.split('-'));

console.log(gameName.charCodeAt());
console.log(gameName.codePointAt());
console.log(gameName.endsWith(`o`));
console.log(gameName.valueOf());
console.log(gameName.substr(1,4));
console.log(gameName.search('-'));