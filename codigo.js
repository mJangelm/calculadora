let h1 = document.getElementById("resultado");


function sumar(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let resultados = +num1 + +num2
      
    resultado.textContent = resultados;
    return resultados;
    
}

function restar(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let resultados = +num1 - +num2
      
    resultado.textContent = resultados;
    return resultados;
}

function multi(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let resultados = +num1 * +num2;
      
    resultado.textContent = resultados;
    return resultados;
}

function divi(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let resultados = +num1 / +num2;
      
    resultado.textContent = resultados;
    return resultados;
}

function potencia(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let resultados = Math.pow(num1,num2);
      
    resultado.textContent = resultados;
    return resultados;
}

function raiz(num1) {
    num1 = document.getElementById("num1").value;
    let resultados = Math.sqrt(num1);
      
    resultado.textContent = resultados;
    return resultados;
}

function absoluto(num1) {
    num1 = document.getElementById("num1").value;
let resultados = Math.abs(num1);
resultado.textContent = resultados;
return resultados;
}

function random(num1,num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
let resultados = Math.floor(Math.random() * (num1-num2) + num2);
resultado.textContent = resultados;
return resultados;
}