// ******  Immediately Invoked Function Expression  ***** (IIFE)

//we use it kyunki global scope se pollution hoti hai kayi baar usko hatane ke liye we use IIFE

(function hello(){
    console.log("hello world");
})();

//()();

(() => {
    console.log("hello");
})();

((username) => {
    console.log(`hello,${username}`);
})("rabi");