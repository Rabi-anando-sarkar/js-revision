const user = {
    username: "Rabi",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function() {
        console.log(`${this.username}`);
    }
} 

//console.log(user.getUserDetails());

/*
const  promiseOne = new Promise()
const  dateOne = new Date()
const  stringOne = new String()
const  numberOne = new Number()
*/

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// new keyword se ek empty object create hota hai usko instance bola jaata hai 

const userOne = new User('Rabi',10,true)
const userTwo = new User("Anando",11,false)

console.log(userOne);
console.log(userTwo);