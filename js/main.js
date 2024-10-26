class Usuario {
    constructor(nombre, tieneCodigo) {
        this.nombre = nombre;
        this.tieneCodigo = tieneCodigo;
    }

    saludar() {
        return 'Hola, ' + this.nombre + '! ' + (this.tieneCodigo ? 'Tienes un código de promoción.' : 'No tienes un código de promoción.');
    }
}

function iniciar() {
    const nombre = prompt("Ingresa tu nombre:");
    if (nombre) {
        alert('Hola, ' + nombre + '!');
    } else {
        alert('No ingresaste tu nombre.');
        return; 
    }

    const tieneCodigo = prompt("¿Tienes un código de promoción? (sí/no)").toLowerCase() === 'sí';
    const usuario = new Usuario(nombre, tieneCodigo);

    console.log(usuario.saludar());
}

iniciar();



class Productos{
    constructor(nombre, precio, desc, stock){
     this.nombre = nombre;
     this.precio = precio;
     this.desc = desc;
     this.stock = stock;
    }

    restartStock(){
    this.stock--
    }
    
    agregarStock(){
        this.stock += cantidad
    }
}


Productos.restartStock()
console.log(Productos);

Productos.agregarStock(40)
console.log(Productos);

console.log(Productos.join("+"));
console.log("Nuestros productos son:" + Productos.jon(",") + ".");


const Productos = new Productos("id: Item1Rostro",3000,"Fondo tinta compacto e crema", 40)
const Productos = new Productos("id: Item2Ojos",2500,"Delineador negro en gel", 40)
const Productos = new Productos("id: Item3Labios",1500,"Lipglos Rosa", 40)
const Productos = new Productos("id: Item4Ojos",2200,"Sombra color cobrizo", 40)
const Productos = new Productos("id: ItemOjos",3200,"Mascara color negro para el volumen", 40)

const Producto = [
    {nombre: 'Item1Rostro', precio:3000},
    {nombre: 'Item2Ojos', precio:2500},
    {nombre: 'Item3Labios', precio:1500},
    {nombre: 'Item4Ojos', precio:2200},
    {nombre: 'Item5Ojos', precio:3200},
]

const resultado = id.filter ((el) => el.nombre.includes('Ojos'))
console.log(resultado)

const nombres = Producto.map ((el) => el.nombre)
console.log(nombres)


const numeros = [1,2,3,4,5];
for (let i = 0; i < numeros.length; i++);
console.log(numeros.length)


console.log (Math.max (3200,3000))
console.log (Math.min(2500,2200))

console.log(new Date ())
