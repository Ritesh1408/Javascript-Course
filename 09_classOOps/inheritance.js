class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);      
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username) // take refrence from class
        this.email = email
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
        
    }
}

const tea = new Teacher("Tea", "tea@gmai.com")
tea.addCourse()

tea.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(tea instanceof User);

