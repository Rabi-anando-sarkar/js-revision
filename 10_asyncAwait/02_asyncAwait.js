const start = document.getElementById('START')
const stops = document.getElementById('STOP')

const sayDate = function(str) {
    console.log(str , "Javascript : ");
}

let task;

start.addEventListener('click',function() {
    task = setInterval(sayDate,1000,"hello")
})

stops.addEventListener('click',function() {
    clearInterval(task)
    task = null;
    
}) 
