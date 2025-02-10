class Punto {
    constructor(x, y) {
      this.x = typeof x === 'number' ? x : 0;
      this.y = typeof y === 'number' ? y : 0;
    }
  
    cambiar(x, y) {
      this.x = typeof x === 'number' ? x : 0;
      this.y = typeof y === 'number' ? y : 0;
    }
  
    copia() {
      return new Punto(this.x, this.y);
    }
  
    suma(punto) {
      return new Punto(this.x + punto.x, this.y + punto.y);
    }
  
    obtenerDistancia(punto) {
      const dx = this.x - punto.x;
      const dy = this.y - punto.y;
      return Math.sqrt(dx ** 2 + dy ** 2);
    }
  
    iguales(punto) {
      return this.x === punto.x && this.y === punto.y;
    }
  
    toString() {
      return `(${this.x}, ${this.y})`;
    }
  }
  
  document.getElementById('botonEjecutar').addEventListener('click', () => {
    const output = document.getElementById('output');
    let result = '';
  
    const p = new Punto(1, 2);
    const q = new Punto(6, -3);
  
    p.cambiar(-5, 2);
  
    const r = p.copia();
    r.x = 9;
  
    result += `p: ${p.toString()}\n`;
    result += `r: ${r.toString()}\n`;
  
    const s = p.suma(r);
    result += `s: ${s.toString()}\n`;
  
    result += `Distancia entre p y q: ${p.obtenerDistancia(q)}\n`;
    result += `¿p y q son iguales? ${p.iguales(q)}\n`;
  
    output.textContent = result;
  });
  