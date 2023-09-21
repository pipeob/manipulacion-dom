const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     console.log({event});
//     event.preventDefault();
//     const sumaInput = Number(input1.value) + (input2.value*1);
//     pResult.innerText = 'Resultado: ' +sumaInput
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(){
    const sumaInput = Number(input1.value) + (input2.value*1);
    pResult.innerText = 'Resultado: ' +sumaInput
}