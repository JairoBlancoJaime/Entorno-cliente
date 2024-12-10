// Asignamos la iteración del numero (10000) y la frecuencia en un array de 10 rellenados de 0.
const vueltasTotal = 10000;
const frecuencia = Array(10).fill(0);

// Creamos un bucle para rellenar el array.
for (let i = 0; i < vueltasTotal; i++) {

    // Creamos el numero aleatorio.
    const numeroRandom = Math.floor(Math.random() * 10) + 1;
    // El numero aleatorio que haya salido, se le asigna a su posición en el array.
    frecuencia[numeroRandom - 1]++;
}

// Creamos una constante que almacene, del html, el id "frecuencia".
const tablaFrecuencias = document.getElementById('frecuencia');

// Iteramos sobre el array 'frecuencia'.
frecuencia.forEach((frequency, index) => {

    // Creamos un nuevo elemento de fila de tabla (tr).
    const fila = document.createElement('tr');
    // Creamos la columna de número para el número.
    const numeroColumna = document.createElement('td');
    // Creamos la columna de frecuencia para la frecuencia.
    const frecuenciaColumna = document.createElement('td');

    // Asigna el número correspondiente como contenido de texto de la celda 'numeroColumna'.
    numeroColumna.textContent = index + 1;
    // Asigna la frecuencia correspondiente como contenido de texto de la celda 'frecuenciaColumna'.
    frecuenciaColumna.textContent = frequency;
    
    // Añade la celda 'numeroColumna' a la fila.
    fila.appendChild(numeroColumna);
    // Añade la celda 'frecuenciaColumna' a la fila
    fila.appendChild(frecuenciaColumna);
    // Añade la fila completa a la tabla.
    tablaFrecuencias.appendChild(fila);
});