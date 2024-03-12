// let myName = "Rabi     "
// let myChai = "chai     "

// console.log(myName.truelength);


let myHeroes = ['thor','spiderman']

let heroPower = {
    thor : "hummer",
    spiderman : "sling",

    getSipderPower : function() {
        console.log(`spider power is ${this.spiderman}`)
    }
}

function test() {
    console.log(`i will print something`);
}

Object.prototype.rabi = function() {
    console.log(`Rabi is present Every where`);
}

Array.prototype.heyRabi = function() {
    console.log('Rabi said hello');
}

// test.rabi()
// heroPower.rabi()


// myHeroes.rabi()
// myHeroes.heyRabi()
// heroPower.heyRabi()

// inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVidoes: true
}

const TeachingSupport = {
    isAvailable: false
}

// out dated approach

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern approach

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "rabi javascript    "

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.truelength()
