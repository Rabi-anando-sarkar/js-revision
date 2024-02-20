const tinderUser1 = new Object() //no output difference and its singleton
const tinderUser2 = {} //non singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "rabtab"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rabi@google.com",
    fullname: {
        userfullname: {
            firstname: "rabi",
            lastname: "anando"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2) //target,source

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "rabi@gmail.com"
    },
    {
        id: 2,
        email: "rabi@gmail.com"
    },
    {
        id: 3,
        email: "rabi@gmail.com"
    },
    {
        id: 4,
        email: "rabi@gmail.com"
    },
]

//console.log(users[1].id);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));