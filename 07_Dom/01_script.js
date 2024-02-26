const parent = document.querySelector('.parent')
/*
console.log(parent);
console.log(parent.children[3].innerHTML);
*/

/*
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
*/

parent.children[1].style.color = "pink"

//console.log(parent.firstElementChild);
//console.log(parent.lastElementChild);

const days = document.querySelector('.day');

//console.log(days);
//console.log(days.parentElement);
//console.log(days.nextElementSibling);

console.log('Nodes : ',parent.childNodes);