function realizarOperacion(operacion) {
     
    // Obtenenemos los valores de las cajas de texto del index html.
     const num1 = parseFloat(document.getElementById('Operando1').value);
     const num2 = parseFloat(document.getElementById('Operando2').value);

     // Declaramos la variable resultado para introducirla en el siguiente condicional.
     let resultado;
     
     /* Realizamos mediante una serie de condiciones, la operación de suma, resta o multiplicación.
     Empezamos estableciendo la condición para sumar,
     igualando lo que solicitó el usuario con la función de suma.*/
     if (operacion === 'suma') {    
        
        // Asignamos valor al resultado, que sume el Operando1 con el Operando2.
        resultado = Operando1 + Operando2;

        /* Establecemos la segunda condición para restar,
            igualando lo que solicitó el usuario con la función de resta.*/
        } else if (operacion === 'resta') {

            // Asignamos valor al resultado, que reste el Operando1 con el Operando2.
            resultado = Operando1 - Operando2;

            /* Establecemos la segunda condición para multiplicar,
            igualando lo que solicitó el usuario con la función de multiplicación.*/
        } else if (operacion === 'multiplicación')

            // Asignamos valor al resultado, que multiplique el Operando1 con el Operando2.
            { resultado = Operando1 * Operando2;

            } // Cerramos el if.

    // Mostramos el resultado en la caja de texto.
    document.getElementById('resultado').value = resultado;
    
} // Fin de la función.