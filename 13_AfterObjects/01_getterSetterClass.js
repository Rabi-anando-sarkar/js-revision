class User {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email() {
        return `${this._email} is not working`
    }

    set email(value) {
        this ._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const rabi = new User("rabi@gmail.com","abc")

console.log(rabi.email);

/*

    setters ko return nahi karte
    getters ko return karte hai
    
    imagine ek data base hai usme jab koi value daaloge to setters use hota

    and koi agar unn value ko get karna hai chahta hai to getters use hota 

    get ke saath inke property ka name same hee hota hai but fir uske variable name ke saath

    ek _ lagana hota nahi to hum same chiz khud aur constructor krra hota

*/