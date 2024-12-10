const vueltasTotal = 20000;
const arrayAleatorio1 = Array(20000).fill(0);
const arrayAleatorio2 = Array(20000).fill(0);

for (let i = 0; i < vueltasTotal; i++) {

    // Creamos el numero aleatorio.
    const numeroRandom = Math.floor(Math.random() * 40) + 1;
    // El numero aleatorio que haya salido, se le asigna a su posición en el array.
    arrayAleatorio1[numeroRandom - 1]++;
    // Creamos el numero aleatorio.
    numeroRandom = Math.floor(Math.random() * 40) + 1;
    // El numero aleatorio que haya salido, se le asigna a su posición en el array.
    arrayAleatorio2[numeroRandom - 1]++;
}

/*** Otra forma de hacer el array y rellenarlo con numeros aleatorios ***/
/* 
const arrayAleatorio1 = Array.from({ length: 20000 }, () => Math.floor(Math.random() * 40) + 1);
const arrayAleatorio2 = Array.from({ length: 20000 }, () => Math.floor(Math.random() * 40) + 1);
*/

document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 1 || numero > 40) {
        alert('Por favor, introduce un número válido entre 1 y 40.');
        return;
    }

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    // Función para analizar un array
    function analizarArray(array, nombreArray) {
        let conteo = 0;
        let posiciones = [];
        
        array.forEach((num, index) => {
            if (num === numero) {
                conteo++;
                posiciones.push(index);
            }
        });

        const porcentaje = ((conteo / array.length) * 100).toFixed(2);

        // Mostrar resultados
        const resultadoHTML = `
            <h2>Resultados para ${nombreArray}</h2>
            <p>El número ${numero} aparece ${conteo} veces (${porcentaje}%)</p>
            <p>Posiciones:</p>
            <ul>${posiciones.map(pos => `<li>Posición ${pos + 1}: ${numero}</li>`).join('')}</ul>
        `;
        resultados.innerHTML += resultadoHTML;
    }

    // Analizar ambos arrays
    analizarArray(arrayAleatorio1, 'Array Aleatorio 1');
    analizarArray(arrayAleatorio2, 'Array Aleatorio 2');
});
