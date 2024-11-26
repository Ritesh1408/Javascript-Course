// prop

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`user : ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const nameM = new User("Golu")
console.log(nameM.createId());

class gola extends User{
    constructor(username, id){
        super(username)
        this.id = id
    }
}

const idNUm = new gola("GolaBaba", "gola@gmail.com")
console.log(idNUm.createId());

// Static properties cannot be directly accessed on instances of the class. 
// Instead, they're accessed on the class itself.

// Static methods are often utility functions, 
// such as functions to create or clone objects, 
// whereas static properties are useful for caches, 
// fixed-configuration, or any other data you don't need 
// to be replicated across instances.



