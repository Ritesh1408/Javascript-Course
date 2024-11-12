const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);
// this usecase gives NaN because the value is empty


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        // results.innerHTML = `Your BMI is ${bmi}`;
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.5){
            results.innerHTML += `<p>You are underweight</p>`;
        }else if(bmi >= 18.5 && bmi <= 24.9){
            results.innerHTML += `<p>You are normal weight</p>`;
        }else{
            results.innerHTML += `<p>You are overweight</p>`;
        }
    }

})
