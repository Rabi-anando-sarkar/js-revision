//let , var , const 

/*
if(true) {
    var num1 = 10
    let  num2 = 20;
    const num3 = 30;
}
*/

/*
console.log(num1);
console.log(num2);
console.log(num3);
*/

//closure ka example
/*
function one() {
    const username = "rabi"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}

one();
*/

/*
if(true) {
    const username = "rabi"
    if(username === "rabi") {
        const website = " github"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);
*/

// interesting

//normal function
addOne(5); //will execute

function addOne(num) {
    return num + 1
}

addTwo(5); //will not execute

//function expression
const addTwo = function(num) {
    return num + 2
}


