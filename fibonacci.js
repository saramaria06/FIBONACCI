function isNumber(value) {
    return !isNaN(value) && Number.isInteger(parseFloat(value));
}

// Función para generar la serie de Fibonacci
function generateFibonacci(n) {
    let fiboSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
    return fiboSeries.slice(0, n); // Recortar la serie si n es menor que 2
}

// Solicitar al usuario un número válido
let userInput;
do {
    userInput = prompt("Por favor, ingresa un número para generar la serie de Fibonacci:");
    if (!isNumber(userInput)) {
        alert("Error: Por favor, ingresa un número válido.");
    }
} while (!isNumber(userInput));

let number = parseInt(userInput);
let fibonacciSeries = generateFibonacci(number);

// Mostrar la serie de Fibonacci en la consola
console.log("Serie de Fibonacci:", fibonacciSeries.join(", "));

// Mostrar la serie de Fibonacci en el DOM
document.getElementById("fibonacci").textContent = fibonacciSeries.join(", ");