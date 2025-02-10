class Punto {
	constructor(x, y) {
    	// Validamos que las coordenadas sean números, si no, las colocamos a 0
    	this.x = typeof x === "number" ? x : 0;
    	this.y = typeof y === "number" ? y : 0;
	}

	// Método para cambiar las coordenadas del punto
	cambiar(x, y) {
    	this.x = typeof x === "number" ? x : 0;
    	this.y = typeof y === "number" ? y : 0;
	}

	// Método para crear una copia del objeto actual
	copia() {
    	return new Punto(this.x, this.y);
	}

	// Método para sumar las coordenadas con otro punto
	suma(otroPunto) {
    	return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
	}

	// Método para verificar si dos puntos son iguales
	iguales(otroPunto) {
    	return this.x === otroPunto.x && this.y === otroPunto.y;
	}

	// Método para calcular la distancia entre dos puntos
	obtenerDistancia(otroPunto) {
    	const distanciaX = this.x - otroPunto.x;
    	const distanciaY = this.y - otroPunto.y;
    	return Math.sqrt(distanciaX ** 2 + distanciaY ** 2);
	}

	// Método para convertir las coordenadas en un string
	toString() {
    	return `(${this.x}, ${this.y})`;
	}
}

// Ejemplo de uso
const p = new Punto(1, 2);
const q = new Punto(6, -3);

// Cambiamos las coordenadas del punto `p`
p.cambiar(-5, 2);

// Creamos una copia del punto `p`
const r = p.copia();
r.x = 9; // Modificamos solo la copia

// Comprobamos que `p` y `r` son diferentes
console.log("p:", p.toString());
console.log("r:", r.toString());

// Creamos un nuevo punto sumando las coordenadas de `p` y `r`
const s = p.suma(r);
console.log("s:", s.toString());

// Calculamos la distancia entre `p` y `q`
console.log("Distancia entre p y q:", p.obtenerDistancia(q));

// Comprobamos si dos puntos son iguales
console.log("¿p y r son iguales?", p.iguales(r));