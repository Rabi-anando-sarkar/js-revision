const myArr = [0,23,45,6,7,88,65,4,70,97];
const myHero = ["ironman","spiderman","antman"];
const myArr2 = new Array(1,2,3,4,5);

//console.log(myArr[4]);
//console.log(myHero);
//console.log(myArr2);

//myArr2.push(7);
//myArr2.push(6);
//myArr2.pop();
//myArr2.unshift(9)
//myArr2.shift()
//console.log(myArr2.includes(4));
//console.log(myArr2.indexOf(4));

/*
const newArr = myArr2.join()
console.log(myArr2)
console.log(newArr);
*/

console.log("A ", myArr2);
const myn1 = myArr2.slice(1,3); //original array ko manipulate nahi karta hai
console.log(myn1);
console.log("B ",myArr2);
const myn2 = myArr2.splice(1,3); //original array ko manipulate karta hai
console.log("C ",myArr2);
console.log(myn2);
