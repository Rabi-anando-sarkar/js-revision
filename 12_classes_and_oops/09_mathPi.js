const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//console.log(descriptor);

const myNewObj = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(myNewObj, "price"));

// Object.defineProperty(myNewObj, "price", {
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(myNewObj, "price"));a

for (let [k,v] of Object.entries(myNewObj)) {
    console.log(`${k} : ${v}`);
}