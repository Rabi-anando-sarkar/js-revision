//create

function addLanguage(lName) {
    const li = document.createElement("li");
    li.innerHTML = `${lName}`
    document.querySelector(".language").appendChild(li)
}

//poora tree traverse hoti hai

addLanguage("Typescript")
addLanguage("Python")

function addPtiLang(lName) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(lName))
    document.querySelector('.language').appendChild(li)
}

//poora tree traverse nahi hoti hai

addPtiLang("Ruby")

//edit

// #1
const  secondLang = document.querySelector('li:nth-child(2)')
const newLi = document.createElement('li')
newLi.textContent = "Go Lang"
secondLang.replaceWith(newLi)


// #2
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = "<li>Mojo</li>"

//remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove()