//map

const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNUms = Nums.map( (num) => num+10 )

//chaining method
const newNUms = Nums
                .map( (num) => num * 10)
                .map( (num) => num + 1).
                filter( (num) => num >= 40)


console.log(newNUms);




