//if
// conditions: <, >, <=, >=, ==, ===, !=, &&. ||

if(true) {
    console.log(`This will get execute`);
}

if(false) {
    console.log(`This will not get execute`);
}

//if else

if(false) {
    console.log(`This will not get execute`);
} else {
    console.log(`This will get execute`);
}

//shorthand notation

if(true) console.log("This will execute");

//nested if else

if(true) {
    if(false) {
        console.log(`This will not get execute`);
    } else {
        console.log(`This will get execute`);
    }
} else {
    console.log("This will not grt execute");
}