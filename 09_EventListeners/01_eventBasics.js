const owl = document.getElementById('owl')
const images = document.getElementById('images')
const google = document.getElementById('google')

/* 

* type
* timestamp
* defaultPrevented
* target
* toElement
* source Element
* current Element
* clientX
* clientY
* screenX
* screenY
* altKey
* ctrlKey
* shiftKey
* leyCode

*/

// event propogation * bubbling hoti yahan if false * instead vo capturing mode 

/*

images.addEventListener('click',() => {
    console.log('clicked inside the ul');
},false)

owl.addEventListener('click',() => {
    console.log('owl clicked');
    e.stopPropagation();
},false)

google.addEventListener('click',(e) => {
    e.preventDefault();
    e.stopPropagation();
    alert('google');
})

*/

images.addEventListener('click', function(e) {
    // removeIt.remove();
    if(e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode;
        removeIt.parentNode.removeChild(removeIt);
    }
},false)