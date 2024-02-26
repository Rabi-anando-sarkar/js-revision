//reduce //used in shopping carts

const myNums = [1,2,3];

/*
const myTotal = myNums.reduce((acc,curVal) => {
    console.log(`acc -> ${acc} and curVal -> ${curVal}`);
    return acc + curVal
},3)
*/

//console.log(myTotal);

const programmingCourses = [
    { course: 'JavaScript', price: 1999 },
    { course: 'Python', price: 3999 },
    { course: 'Java', price: 2999 },
    { course: 'C++', price: 5999 },
    { course: 'Ruby', price: 4999 },
    { course: 'C#', price: 7999 },
    { course: 'Swift', price: 8999 },
    { course: 'PHP', price: 9999 },
    { course: 'Go', price: 6999 },
    { course: 'TypeScript', price: 999 },
  ];

const shoppingCart = programmingCourses.reduce((acc,itemPrice) => acc+itemPrice.price,0)

console.log(shoppingCart);