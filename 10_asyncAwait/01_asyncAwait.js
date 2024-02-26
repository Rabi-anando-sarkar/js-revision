const heading = document.querySelector('h1')
const button = document.querySelector('button')

const changeText = function() {
    heading.innerHTML = 'Rabi is hard working'
}

const changeMe = setTimeout(changeText,3000) 


button.addEventListener('click',function() {
    clearTimeout(changeMe)
    console.log("Stopped");
})
