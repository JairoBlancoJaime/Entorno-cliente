function principal() {
    inicializa_parametros();
    keys = new KeyListener();
    bucle()
}

function inicializa_parametros() {
    //Sonido
    beep = new Audio("beep.wav");
    punto = new Audio("punto.wav");
    hay_sonido = true;
    
    // Canvas campo
    canvas = document.getElementById("campo");
    ancho_canvas = canvas.width;
    alto_canvas = canvas.height;
    context = canvas.getContext("2d");

    // Parametros pelota
    x = ancho_canvas / 2;
    y = alto_canvas / 2;
    ancho_pelota = 14;
    alto_pelota = 14;
    inc_pelota = 1; // Avance de la pelota en cada iteracion
    incX = inc_pelota;
    incY = inc_pelota;

    // Parametros Palas
    separacion = 12; // Separacion desde el extremo del campo
    alto_pala = alto_canvas / 5;
    ancho_pala = 10;
    inc_pala = 2; // Posiciones que avanza cuando se mueve

    // Posiciones de las paletas de jugadores (i)zq y (d)er.
    jiX = separacion;
    jiY = alto_canvas / 2 - alto_pala / 2;
    jdX = ancho_canvas - separacion - ancho_pala;
    jdY = jiY;

    // Caracteres que representan movimientos y controles
        // Pala izquierda
    CAR_I_ARRIBA_U = "A"; // Mover paleta izquierda arriba mayusculas
    CAR_I_ARRIBA_L = CAR_I_ARRIBA_U.toLowerCase(); // PI arriba minusculas
    CAR_I_ABAJO_U = "Z"; // Mover paleta izquierda abajo mayusculas
    CAR_I_ABAJO_L = CAR_I_ABAJO_U.toLowerCase(); // PI abajo minusculas
        // Pala derecha
    CAR_D_ARRIBA_U = "K"; // Mover paleta derecha arriba mayusculas
    CAR_D_ARRIBA_L = CAR_D_ARRIBA_U.toLowerCase(); // PD arriba minusculas
    CAR_D_ABAJO_U = "M"; // Mover paleta derecha abajo mayusculas
    CAR_D_ABAJO_L = CAR_D_ABAJO_U.toLowerCase(); // PD abajo minusculas
    // KeyCode (Movimiento paletas)
        // Pala izquierda
    KEY_I_ARRIBA_U = CAR_I_ARRIBA_U.charCodeAt(0); // mayusculas
    KEY_I_ARRIBA_L = CAR_I_ARRIBA_L.charCodeAt(0); // minusculas
    KEY_I_ABAJO_U = CAR_I_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_I_ABAJO_L = CAR_I_ABAJO_L.charCodeAt(0); // minusculas
        // Pala derecha
    KEY_D_ARRIBA_U = CAR_D_ARRIBA_U.charCodeAt(0); // Mayusculas
    KEY_D_ARRIBA_L = CAR_D_ARRIBA_L.charCodeAt(0); // Minusculas
    KEY_D_ABAJO_U = CAR_D_ABAJO_U.charCodeAt(0); // Mayusculas
    KEY_D_ABAJO_L = CAR_D_ABAJO_L.charCodeAt(0); // Minusculas
    // Inicializacion deteccion de pulsaciones para KeyCode
        // Pala izquierda
    PI_ARRIBA = false;
    PI_ABAJO = false;
        // Pala derecha
    PD_ARRIBA = false;
    PD_ABAJO = false;

    inicio_partida();
}

// Dibuja el Campo
function dibuja_campo() {
    context.fillStyle = "red";
    context.clearRect(0, 0, ancho_canvas, alto_canvas);
    context.fillRect(ancho_canvas / 2, 0, 2, alto_canvas);
}


// Hacer rebotar la pelota
function calcula_coordenadas_pelota() {
    x += incX;
    y += incY;

    // Comprobacion de la pelota respecto de la pala izquierda
    if (y >= jiY && y <= jiY + alto_pala - 1) {
        if (x <= jiX + ancho_pala) {
            incX = -incX; // Cambio de direccion horizontal
            x = jiX + ancho_pala;
            if (hay_sonido) beep.play();
        }
    } else {
    // Si ha rebasado la posicion de la pala es un punto para el jugador contrario.
        if (x < jiX - separacion) {
            inicio_punto();
            puntosD += 1;
            if (hay_sonido) punto.play();
        }
    }

    // Comprobacion de la pelota respecto de la pala derecha
    if (y >= jdY && y <= jdY + alto_pala - 1) {
        if (x + ancho_pelota >= jdX) {
            incX = -incX; // Cambio de direccion horizontal
            x = jdX - ancho_pelota;
            if (hay_sonido) beep.play();
        }
    } else {
        // Si ha rebasado la posicion de la pala es un punto para el jugador contrario.
        if (x + ancho_pelota > jdX + separacion) {
            inicio_punto();
            puntosI += 1;
            if (hay_sonido) punto.play();
        }
    }

    // Si la pelota rebota en la parte superior o inferior de la pantalla, cambia de direccion vertical.
    if (y + alto_pelota > alto_canvas || y < 0) {
        incY = -incY;
        if (hay_sonido) beep.play();
    }
}

// Dibujamos la pelota
function dibuja_pelota(x, y) {
    context.fillStyle = "lightgreen";
    context.fillRect(x, y, ancho_pelota, alto_pelota);
}

// Muestra pala del jugador izquierdo
function dibuja_jugadorI(jiX, jiY) {
    context.fillStyle = "white";
    context.fillRect(jiX, jiY, ancho_pala, alto_pala);
}

// Muestra pala del jugador derecho
function dibuja_jugadorD(jdX, jdY) {
context.fillStyle = "white";
context.fillRect(jdX, jdY, ancho_pala, alto_pala);
}

function KeyListener() {
    this.pressedKeys = [];
    this.keydown = function (e) {
        this.pressedKeys[e.keyCode] = true;
    };
    this.keyup = function (e) {
        this.pressedKeys[e.keyCode] = false;
    };
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
}

KeyListener.prototype.isPressed = function (key) {
    return this.pressedKeys[key] ? true : false;
};

// Controlamos si el jugador esta pulsando o si esta manteniendo
function controlar_pulsacion() {
    if (keys.isPressed(KEY_I_ABAJO_U || KEY_I_ABAJO_L)) { // Abajo Izq
        PI_ABAJO = true;
    } else if (keys.isPressed(KEY_I_ARRIBA_U || KEY_I_ARRIBA_L)) { // Arriba Izq
        PI_ARRIBA = true;
    }

    if (keys.isPressed(KEY_D_ABAJO_U || KEY_D_ABAJO_L)) { // Abajo Der
        PD_ABAJO = true;
    } else if (keys.isPressed(KEY_D_ARRIBA_U || KEY_D_ARRIBA_L)) { // Arriba Der
        PD_ARRIBA = true;
    }
    calcula_coordenadas_pala();
}

function calcula_coordenadas_pala() {
    // Pala izquierda
    if (PI_ARRIBA == true) {
        jiY -= inc_pala;
        if (jiY < 0) jiY = 1;
        PI_ARRIBA = false;
    }
    if (PI_ABAJO == true) {
        jiY += inc_pala;
        if (jiY + alto_pala > alto_canvas) jiY = alto_canvas -
        alto_pala;
        PI_ABAJO = false;
    }

    //Pala derecha
    if (PD_ARRIBA == true) {
        jdY -= inc_pala;
        if (jdY < 0) jdY = 1;
        PD_ARRIBA = false;
    }
    if (PD_ABAJO == true) {
        jdY += inc_pala;
        if (jdY + alto_pala > alto_canvas) jdY = alto_canvas - alto_pala;
        PD_ABAJO = false;
    }
}

// Inicializa valores para el inicio de un punto
function inicio_punto() {
    inicioY = Math.floor((Math.random() * alto_canvas / 2) + 1);

    x = ancho_canvas / 2; // Iniciamos desde el centro del campo
    y = inicioY; // La posicion vertical de la pelota es aleatoria
    
    // La direccion de la pelota en es aleatoria
    valorX = Math.floor((Math.random() * 100) + 1);

    if (valorX < 50) {
        incX = inc_pelota;
    } else {
        incX = -inc_pelota;
    }
    valorY = Math.floor((Math.random() * 100) + 1);

    if (valorY < 50) {
        incY = inc_pelota;
    } else {
        incY = -inc_pelota;
    }

    // Posiciones de las paletas de jugadores (i)zq y (d)er.
    jiX = separacion;
    jiY = alto_canvas / 2 - alto_pala / 2;
    jdX = ancho_canvas - separacion - ancho_pala;
    jdY = jiY;
}

// Iniciamos la partida con el contador 0 - 0
function inicio_partida() {
    puntosI = 0;
    puntosD = 0;
    inicio_punto();
}

// Dibujamos la puntuacion de los jugadores
function dibuja_puntuacion() {
    context.fillStyle = "white";
    context.font = "48px Georgia";
    context.fillText(puntosI, ancho_canvas / 4, 30);
    context.fillText(puntosD, (ancho_canvas * 3) / 4, 30);
}

// Creamos un bucle para ver como se va moviendo la pelota y las palas
function bucle() {
    dibuja_campo();
    calcula_coordenadas_pelota();
    controlar_pulsacion();
    dibuja_pelota(x, y);
    dibuja_jugadorI(jiX, jiY);
    dibuja_jugadorD(jdX, jdY);
    dibuja_puntuacion();
    setTimeout(bucle, 4);
}

principal();