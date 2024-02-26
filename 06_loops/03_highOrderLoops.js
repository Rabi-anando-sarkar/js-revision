//array specific loops
/*
["","",""]
[{},{},{}]
*/

//for of loop

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello Rabi"

for (const greet of greetings) {
    //console.log(greet);
}

//maps //for unique values

const map = new Map()
map.set('IN',"India")
map.set('RU',"Russia")
map.set('FR',"France")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key ,'->',value);
}

// for each loop //it does not return any value

const coding = ["js","py","rb","cpp","java"];

coding.forEach( function (item) {
    //console.log(item);
})

coding.forEach((item) => {
    //console.log(item);
})

/*
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)
*/

coding.forEach( (item,index,arr) => {
    //console.log(item,index,arr);
})

const myCoding = [
    {
        languageName : "JavaScript",
        languageExtension : "js"
    },
    {
        languageName : "Python",
        languageExtension : "py"
    },
    {
        languageName : "Ruby",
        languageExtension : "rb"
    },
    {
        languageName : "C++",
        languageExtension : "cpp"
    },
    {
        languageName : "Java",
        languageExtension : "java"
    },
]

myCoding.forEach((item) => {
    console.log("Names -> ",item.languageName);
    console.log("Extensions -> ",item.languageExtension);
})