/*
// Promise one

const promisOne = new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log('Task Complete');
        resolve()
    },1000)
})

promisOne.then(function(){
    console.log("Promise consumed");
})

// Promise two

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task Completed Again');
        resolve()
    },2000)
}).then(function(){
    console.log('Promise 2 resolved');
})

// Promise three

const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email : "chai@example.com"})
    },3000)
})

promisThree.then(function({username,email}){
    console.log(`Hello ${username} your email is ${email}`);
})

// Promise four

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "rabi", password: "something"})
        } else {
            reject('ERROR: Somthing Went Wrong!')
        }
    },4000)
})

promisFour
.then(function(user){
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(() => console.log('The promise is eiter resolved or rejected'))


// Promise five

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : 'Anando',password : "123"})
        } else {
            reject('ERROR: Anando Went Wrong!')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}

getAllUsers()

*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(`ERROR : ${error}`);
})