// Immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB connected`);
    
})();
// chai();

// () function and () execution
// global scope ke pollution/error declared variable se bachne ke liye iife use karte hai

//IIFE creates a lexical scope using function scoping.
// iffy
//IIFE provides encapsulation, which lets you create private scopes for variables and functions. This prevents variable conflicts and unintended data modifications in the global scope

//Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.

  //if we define multiple function like this, then we take care that use semi colon to avoid error at the end of () excution code point

(() => {
    console.log(`Hello user`);
    
})();

((user) => {
    console.log(`Hello ${user}`);
    
})('ritesh');

(function chai () {
    //named iife
    console.log(`Hello user`);
    
})();


