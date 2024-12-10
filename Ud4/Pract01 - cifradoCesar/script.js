document.addEventListener("DOMContentLoaded", function() {
    
    let cifrarTexto = document.getElementById('btnCifrar');
    let descifrarTexto = document.getElementById('btnDescifrar');

    cifrarTexto.addEventListener("click", function() {
        
        let txtParaCifrar = document.getElementById('txtParaCifrar');
        var clave;

        do{
            var clave = document.getElementById('txtParaCifrar').value;

            if(isNaN(Number(clave))) {
            alert("No has escrito un número");
            } 
            
        } while(isNaN(Number(clave)));
        
        clave=parselnt(clave); // si hay decimales los quitamos
            
        for(let letra of texto){
            
            let cifra=letra.charCodeAt(letra)+clave;
            document.write(String.fromCharCode(cifra));
            
        }

        let resultadotxtCifrado = document.getElementById("ResultadoTxtCifrado");
        resultadotxtCifrado.value = cifra;
    });

    descifrarTexto.addEventListener("click", function() {
        let txtParaDescifrar = document.getElementById('txtParaDescifrar');

    })
})