// for loop

const array = [10, 12, 15]
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
    if(element == 5){
        // console.log("5 is the best number.");
        
    }
    
}

// console.log(array);

for (let i = 0; i <= 10; i++) {
    for(let j = 0; j<=10; j++){
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}





