// OBJETOS: coleccion de datos relacionados

//Objeto literal

/*const alumno1 = {
    nombre: 'Rosa',
    edad: 30,
    nota: 8
}
console.log (alumno1);
*/

/*class auto {
    const (marca, modelo, anio, puertas) {
        this.marca= marca;
        this.modelo= modelo;
        this.anio= anio;
        this.puertas= puertas; 
    }
    mostrarMarca() {
        alert ('auto'+ this.marca);
    }

}
const auto1= new auto(Tesla, X, 2023, 5)
auto1.marca()
*/

/*class Persona{
    constructor (nombre, apellido, edad, dni){
    this.nombre= nombre;
    this.apellido= apellido;
    this.edad= edad;
    this.dni= dni;
    }
    hablar(){
        alert('Hola'+ this.nombre);
    }
}
const estudiante1= new Persona ('Paz', 'Lopez', '30', '30300300');
estudiante1.hablar();
*/
/*class auto {
    constructor(marca, modelo, anio, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
        this.color = color;
        this.precio = precio;
    }
    mostrarMarca() {
        alert this.marca;
    }
    mostrarModelo() {
        alert this.modelo;
    }
    mostrarAnio() {
        alert this.anio;
    }
    mostrarPuertas() {
        alert this.puertas;
    }
    mostrarColor() {
        alert this.color;
    }
    mostrarPrecio() {
        alert this.precio;
    }
}
const auto1 = new auto(Tesla, X, 2023, 5, gris, 3000000);
const auto2 = new auto(Peugeot, 306, 2004, 5, azul, 2000000);
const auto3 = new auto(Ford, Ranger, 2023, 4, negro, 6000000);
*/




/*class Zapatillas {
    constructor (marca, modelo, precio) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }
    descuento () {
        let porcentajeDescuento = Number(prompt('Ingresa tu porcentaje de descuento'))
        // %porcentajeDescuento del 100% 
        // precio ________100%
        // nuevoValor_____porcentajeDescuento
        let nuevoValor = this.precio - ((porcentajeDescuento * this.precio) / 100) 
        alert('Con tu descuento las zapatillas ' + this.marca + ' ' + this.modelo + ' salen ' + nuevoValor + ' pesos 🤩' )
    }
}

const zapatilla1 = new Zapatillas ('Nike', 'Air Force', 68000)
const zapatilla2 = new Zapatillas ('Adidas', 'Forum Mid', 70000)
const zapatilla3 = new Zapatillas ('Fila', 'Disruptor', 40000)

zapatilla3.descuento()*/

/*class auto {
    constructor(marca, modelo, anio, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
        this.color = color;
        this.precio = precio;
    }
    AutoElegido() {
        let elegirMarca = Marca(prompt('Escribe una marca de auto'))
        if (marca = 'Tesla') {
            alert('En Stock tenemos' + this.marca + '' + this.modelo + '' + this.anio + '' + 'cantidad de puertas' + '' + this.puertas + '' + 'de color' '' + this.color + '' + 'a un precio de' + this.precio)
        }
        if (marca = 'Peugeot') {
            alert('En Stock tenemos' + this.marca + '' + this.modelo + '' + this.anio + '' + 'cantidad de puertas' + '' + this.puertas + '' + 'de color' '' + this.color + '' + 'a un precio de' + this.precio)
        }
        if (marca = 'Ford') {
            alert('En Stock tenemos' + this.marca + '' + this.modelo + '' + this.anio + '' + 'cantidad de puertas' + '' + this.puertas + '' + 'de color' '' + this.color + '' + 'a un precio de' + this.precio)
        } 
        else{
            alert ('Ingresa otra marca')
        }
    }
}
const auto1 = new auto(Tesla, X, 2023, 5, gris, 3000000);
const auto2 = new auto(Peugeot, 306, 2004, 5, azul, 2000000);
const auto3 = new auto(Ford, Ranger, 2023, 4, negro, 6000000);

auto1.AutoElegido()
*/

class auto {
    constructor(marca, modelo, anio, puertas) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.puertas = puertas;
        this.color = color;
        this.precio = precio;
    }
    AutoElegido() {
        alert('En Stock tenemos' + this.marca + '' + this.modelo + '' + this.anio + '' + 'cantidad de puertas' + '' + this.puertas + '' + 'de color' '' + this.color + '' + 'a un precio de' + this.precio)
    }
        
}
const auto1 = new auto(Tesla, X, 2023, 5, gris, 3000000);
const auto2 = new auto(Peugeot, 306, 2004, 5, azul, 2000000);
const auto3 = new auto(Ford, Ranger, 2023, 4, negro, 6000000);

auto1.AutoElegido();
