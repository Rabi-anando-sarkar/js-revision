const div = document.createElement('div');

console.log(div);

div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title",'generatedTitle')
div.style.backgroundColor = "wheat"
div.style.padding = "12px"
//div.innerText = "Rabi is hero"
const addText = document.createTextNode("Rabi is a Hero")
div.appendChild(addText)

document.body.appendChild(div)