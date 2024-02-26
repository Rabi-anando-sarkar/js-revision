const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault(); //taaki server me values na jaye
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give Valid Height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give Valid Weight ${weight}`
    } else {
        const BMI = (weight/ ((height*height)/10000).toFixed(2))
        if(BMI < 18.60) {
            results.innerHTML = `<span>You are under Weight : ${BMI}</span>`
        } else if(BMI > 18.6 && BMI < 24.9) {
            results.innerHTML = `<span>You are normal Weight : ${BMI}</span>`
        } else {
            results.innerHTML = `<span>You are over Weight : ${BMI}</span>`
        }
    }
})