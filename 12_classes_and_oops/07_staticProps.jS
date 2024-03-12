class User {
    constructor(username) {
        this.username = username   
    }

    logMe() {
        console.log(`Username : ${this.username}`)
    }

    static createId() {
        return `Your id is : ${Math.floor(Math.random() * 10 + 1)}`
    }
}

const rabi = new User("Rabi")

rabi.logMe()
// console.log(rabi.createId());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const fone = new Teacher("Iphone","I@phone.com")

fone.logMe()
console.log(fone.createId())