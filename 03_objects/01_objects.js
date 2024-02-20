//object literals

const mySymbol = Symbol("key1");

const JsUser = {
    name : "rabi",
    "full name" : "rabi anando sarkar",
    [mySymbol] : "key1",
    age : 21,
    location : "delhi",
    email : "rabi@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","tuesday"]
}

/*
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySymbol]);
*/

/*
JsUser.age = 20;
console.log(JsUser["age"]);
Object.freeze(JsUser);
JsUser.age = 23;
console.log(JsUser["age"]);
console.log(JsUser);
*/

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.noGreeting = function() {
    console.log(`no hello ,${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.noGreeting());