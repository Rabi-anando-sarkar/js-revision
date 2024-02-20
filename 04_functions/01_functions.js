function printName(fn) {
    console.log("Rabi");
    console.log("Ananado");
    console.log("Sarkar");
    console.log(fn);
}

//printName();

/*
function addition(n1,n2) {
    console.log(n1 + n2);
}
*/

/*
addition(4,5);
addition(4,"a");
addition(4,"5");
addition(4,null);
*/

/*
const result = addition(4,5);

console.log(result);
*/

function addition(n1,n2) {
    let result = n1 + n2;
    return result;
}

//addition(4,5);
//const result = addition(4,5);
//console.log(result);

function loginUser(username = "rabi") {
    if(!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in.`
}

//console.log(loginUser("rabi"));
//console.log(loginUser(""));
//console.log(loginUser("anando"));

function calculatePrice(val1,val2,...num1) {
    return num1
}

//console.log(calculatePrice(4,5,6,7,8));

const user = {
    username: "rabi",
    salary: 90000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and salary is ${anyObject.salary}`)
}

//handleObject(user);
/*
handleObject({
    username:"rabi",
    salary: 100000
})
*/
const myArr = [200,300,400,500,600]

function returnSecondValue(getArray) {
    return getArray[1];
}

//console.log(returnSecondValue(myArr));
//console.log(returnSecondValue([100,200,300,400,500]));