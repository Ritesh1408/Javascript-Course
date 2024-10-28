const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop
coding.forEach( function (val) {
    // console.log(val);
    
})

coding.forEach( (item) => {
    // console.log(item);
    
})

function printMe(item){
    // console.log(item);
    
}
// coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        language : "JavaScript",
        languagefilename : "js"
    },
    {
        language : "java",
        languagefilename : "java"
    },
    {
        language : "python",
        languagefilename : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
    console.log(item.languagefilename);
    
})

