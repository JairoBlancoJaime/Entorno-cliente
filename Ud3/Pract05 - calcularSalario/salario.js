document.addEventListener("DOMContentLoaded", function () {

    //Creamos una lectura del boton de calcular.
    let calcularBoton = document.getElementById('calcular');

    // Creamos una funcion para que al clivkear el boton, se ejecute el siguiente codigo.
    calcularBoton.addEventListener("click", function () {

        /*** Peticion de datos ***/
        let nombre = document.getElementById('solicitudNombre');
        let apellidos = document.getElementById('solicitudApelido');
        let edad = document.getElementById('solicitudEdad');
        let salario = document.getElementById('solicitudSalario');

        // Establecemos una serie de condiciones.

        if (salario < 1000) { // Si tiene un salario menor a 1000.
            
            if (edad < 30) { // Si es menor de 30 años.
                salario = 1100;
            } else if (edad <= 45) { // Si tiene entre 30 y 45 años.
                salario *= 1.03;
            } else { // Si tiene más de 45 años.
                salario *= 1.15;
            }

        } else if (salario < 2000) { // Si tiene un salario menor o igual a 2000.
            
            if (edad > 45) {  // Si tiene más de 45 años.
                salario *= 1.03;
            } else {
                salario *= 1.1;
            }

        }

        // Escritura del resultado.
        let salarioCalculado = document.getElementById("resultado");
        salarioCalculado.value = salario;
    })
})
