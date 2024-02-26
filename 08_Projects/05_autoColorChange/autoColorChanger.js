const RGB = document.getElementById('RGB')
const HEX = document.getElementById('HEX')
const stops = document.querySelector('#stop')
const body  = document.querySelector('body')

let task 

const setColorRGB = function() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    body.style.backgroundColor = `rgb(${r},${g},${b})`
}

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16 )]
    }
    return color
}

const setColorHEX = function() {
    body.style.backgroundColor = randomColor()
}

RGB.addEventListener('click',function() {
    if(!task) {
        task = setInterval(setColorRGB,1000)
    }
})

HEX.addEventListener('click',function() {
    if (task == null) {
        task = setInterval(setColorHEX,1000)
    }
})

stops.addEventListener('click',() => {
    clearInterval(task)
    task = null
})