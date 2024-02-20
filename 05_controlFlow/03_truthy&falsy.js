// falsy values

/*
false,
0,
-0,
BigInt 0n,
"",
null,
undefined,
NaN
*/

// truthy values

/*
"0"
"false"
" ",
[],
{},
function(){},
*/

// to check if array is empty

/*
arr = []

if(arr.length === 0) {
    console.log("empty");
}
*/

/*
obj = {}

// Object.keys(obj) this returns an array

if(Object.keys(obj).length === 0 ) { 
    console.log("empty");
}
*/

//Nullish Coalescing Operator (??) //only for null and undefined

let val1;

val1 = 5 ?? 10  

// terneiary operator

condition ? true : false;