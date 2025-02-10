

/* No es de este ejerciccio es del TodoList
function TodoList() {

    // Almaceno las tareas
    this.tasks = [];
    this.addTarea = function(nombre) {
        let newTask = new Task(nombre);
        this.tasks.push
    }

    this.filtrar = function(terminada = 1) {
        this.taks.map( item -> item.estado == terminada);
    }
}

function Task(nombre, estado = 0) {
    this.id = crypto.randomUUID()
    this.nombre = nombre;
    this.estado = estado || 0;
}

let listaTareas = new TodoList()
listaTareas.addTarea('comprar');
listaTareas.addTarea('ver futbol - Champions'); 