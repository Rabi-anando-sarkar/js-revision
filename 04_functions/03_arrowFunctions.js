const user = {
    username: "rabi",
    salary: 100000,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }


}

/*
user.welcomeMessage();
user.username = "anando"
user.welcomeMessage();
*/

//console.log(this);

/*
function chai() {
    let username = "rabi"
    console.log(this.username);
}

chai();
*/

/*
const chai = () => {
    let username = "rabi"
    console.log(this);
}

function chai2() {
    let username = "rabi"
    console.log(this);
}

chai();
chai2();
*/

/*
const addTwo = (n1,n2) => {
    return n1+n2
}

console.log(addTwo(3,4));
*/

// implicit return
const addTwo = (n1,n2) => n1+n2

const addTwo2 = (n1,n2) => (n1+n2)

const returnObject = (n1,n2) => ({ username:"rabi" })

console.log(returnObject());

const myArr = [2,3,4,5,6,7]

/*
myArr.forEach(function() {})
myArr.forEach(() => {});
myArr.forEach(() => ());
*/