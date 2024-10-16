class Usuario {
    constructor(nombre, tieneCodigo) {
        this.nombre = nombre;
        this.tieneCodigo = tieneCodigo;
    }

    saludar() {
        const mensaje = `Hola ${this.nombre}, ¿Deseas aprovechar nuestras promociones?`;
        alert(mensaje);
    }
}

function iniciar() {

const nombre = prompt("Por favor, ingresa tu nombre:");
    
const tieneCodigo = prompt("¿Tienes un código de promoción? (sí/no)").toLowerCase() === 'sí';
const usuario = new Usuario(nombre, tieneCodigo);
usuario.saludar();
}

iniciar();

