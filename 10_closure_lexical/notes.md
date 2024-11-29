# Closures
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 

- In other words, a closure gives a function access to its outer scope. 

- In JavaScript, closures are created every time a function is created, at function creation time.

```javascript 
    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();

```

# Lexical Scoping
- Lexical scoping is a programming concept that determines the scope of a variable based on its closest surrounding scope in the code. 

- It's also known as static scoping. 

## Here are some key points about lexical scoping:

- Scope: The area where a variable or function is visible and accessible to other code. 
- Variable declaration: A variable declared in this fashion is sometimes called a private variable. 
- Access: A function can access variables from the parent to the global scope. 
- Child function: A child function is lexically bound to the parent function. 
- Access from inner to outer scope: Variables of the outer scope can be accessed from the inner scope, but not vice versa. 
- Closures: A closure allows an inner function to access the scope of an outer function. 

```javscript
    function init() {
        var name = "Mozilla"; 
        function displayName() {
            console.log(name); 
        }
        displayName();
    }
    init();

```
