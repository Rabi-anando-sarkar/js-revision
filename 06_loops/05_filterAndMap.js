//filter  //this returns a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
const newNums = myNums.filter((num) => {
    return num > 5
})
*/

//const newNums = [];

/*
myNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num)
    }
})
*/

//console.log(newNums);

const books = [
    {
        title: "book one",
        genre: "fantasy",
        publish: 2000,
        edition: 2002,
    },
    {
        title: "book two",
        genre: "fiction",
        publish: 2001,
        edition: 2003,
    },
    {
        title: "book three",
        genre: "drama",
        publish: 2002,
        edition: 2004,
    },
    {
        title: "book four",
        genre: "romance",
        publish: 2003,
        edition: 2005,
    },
    {
        title: "book five",
        genre: "science",
        publish: 2004,
        edition: 2006,
    },
    {
        title: "book six",
        genre: "fantasy",
        publish: 2005,
        edition: 2007,
    },
    {
        title: "book seven",
        genre: "fiction",
        publish: 2006,
        edition: 2008,
    },
    {
        title: "book eight",
        genre: "drama",
        publish: 2007,
        edition: 2009,
    },
    {
        title: "book nine",
        genre: "romance",
        publish: 2008,
        edition: 2010,
    },
    {
        title: "book five",
        genre: "science",
        publish: 2009,
        edition: 2011,
    },
];

//const userBooks = books.filter(bk => bk.genre === "romance")
//const userBooks = books.filter(bk => bk.publish > 2004)
//const userBooks = books.filter(bk => bk.edition === 2008)
//const userBooks = books.filter(bk => bk.genre === "romance" && bk.edition === 2010)

//console.log(userBooks);

//map 

const myNumbers = [1,2,3,4,5];

const addTen = myNumbers.map( addTen => addTen + 10)

//console.log(addTen);

const emptyArr = [];

const newArray = myNumbers.forEach((num) => {
    emptyArr.push(num +10)
})

//console.log(emptyArr);

//chaining

const otherNums = myNumbers
.map(num => num * 10)
.map(num => num + 3)
.filter(num => num >= 40) //isme bss true false ka game hai

console.log(otherNums);