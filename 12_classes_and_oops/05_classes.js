class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    chnageUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "chai@google.com", 123)

console.log(chai.encryptPassword());
console.log(chai.chnageUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.password = password
    this.email = email;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.chnageUsername = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User("Tea", "tea@google.com", 123)

console.log(tea.encryptPassword());
console.log(tea.chnageUsername());