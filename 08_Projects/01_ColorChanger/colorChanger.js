const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

// ***** using if statements *****
/*
button.forEach((bt) => {
    bt.addEventListener('click',(e) => {
        if (e.target.id === 'color1') {
            body.style.backgroundColor = '#ffd6ff'
        } 
        if (e.target.id === 'color2') {
            body.style.backgroundColor = '#e7c6ff'
        } 
        if (e.target.id === 'color3') {
            body.style.backgroundColor = '#c8b6ff'
        } 
        if (e.target.id === 'color4') {
            body.style.backgroundColor = '#b8c0ff'
        } 
        if (e.target.id === 'color5') {
            body.style.backgroundColor = '#bbd0ff'
        } 
    })
})*/

// ***** using switch case *****

button.forEach((bt) => {
    bt.addEventListener('click',(e) => {
        switch (e.target.id) {
            case 'color1':
                body.style.backgroundColor = '#ffd6ff'
                break;
            case 'color2':
                body.style.backgroundColor = '#e7c6ff'
                break;
            case 'color3':
                body.style.backgroundColor = '#c8b6ff'
                break;
            case 'color4':
                body.style.backgroundColor = '#b8c0ff'
                break;
            case 'color5':
                body.style.backgroundColor = '#bbd0ff'
                break;
            default:
                break;
        }
    })
})