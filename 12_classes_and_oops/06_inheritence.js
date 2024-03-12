class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by ${this.username}`);
    }
}

const myTeacher = new Teacher("chai","chai@chai.com",12345)

console.log(myTeacher);

const chaiName = new User("Adrak Chai")

chaiName.logMe()
myTeacher.logMe()
// chaiName.addCourse()
myTeacher.addCourse()