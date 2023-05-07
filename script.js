const box = document.querySelector('.box');
const container = box.querySelector('.container');

function convert(selectedTemperature, input, convertedInto){
    let result;
    if(selectedTemperature == 'C'){
        if(convertedInto == 'C'){
            return result = input+'°C';
        } else if(convertedInto == 'F'){
            return result = (input * 9 / 5) + 32+'°F';
        } else if(convertedInto == 'K'){
            return result = 273.15 + input+'°K';
        } else {
            return result = (input * 9 / 5) + 491.67+'°R';
        }
    } else if(selectedTemperature == 'F'){
        if(convertedInto == 'F'){
            return result = input+'°F';
        } else if(convertedInto == 'C'){
            return result = (input - 32) * 5 /9+'°C' ;
        } else if(convertedInto == 'K'){
            return result = ((input - 32) * 5 /9) + 273.15+'°K';
        } else {
            return result = input + 459.67+'°R';
        }
    } else if(selectedTemperature == 'K'){
        if(convertedInto == 'K'){
            return result = input+'°K';
        } else if(convertedInto == 'F'){
            return result = ((input - 273.15) * 9 / 5) + 32+'°F';
        } else if(convertedInto == 'C'){
            return result = input - 273.15+'°C';
        } else {
            return result = input * 9 / 5+'°R';
        }
    } else {
        if(convertedInto == 'R'){
            return result = input+'°R';
        } else if(convertedInto == 'F'){
            return result = input - 459.67+'°F';
        } else if(convertedInto == 'C'){
            return result = (input - 32) * 5/9+'°C';
        } else {
            return result = input * 5 /9+'°K';
        }
    }

}

const btnConvert = box.querySelector('.btnConvert');
btnConvert.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputUser = container.querySelector('#inputUser');
    const selectedTemperature = container.querySelector('#selectTemperature');
    const convertedInto = container.querySelector('#convertedInto')
    const result = container.querySelector('#result')


    let output = convert(selectedTemperature.value, parseFloat(inputUser.value), convertedInto.value);
    
    result.value = output;

});