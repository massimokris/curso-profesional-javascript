console.log('Hello, TypeScript');

const add = (a: number, b: number) => {
    return a + b;
}

const sum = add(2, 3);

console.log(sum);

//tipos de datos

//Boolean
let muted: boolean = true;
muted = false;

//Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//string
let nombre: string = 'massimo';
let saludo: string = `Me llamo ${nombre}`;

//arreglos
let people: string[] = [];
people = ['massimo', 'isabela', 'maria'];
//people.push("9000");

//arreglos de multiples tipos de datos
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('ricardo');
peopleAndNumbers.push(9000);

//enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`)

// any
let comodin: any = "Joker";
comodin = {type: 'Wilcard'};

//object
let someObject: object = {type: 'Wilcard'};

//funciones

function suma(a: number, b: number): number{
    return a + b;
}

const sumita = suma(2, 4);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//funcion simple
function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

//funcion que puede o no recibir alguno de los parametros
function fullNameOpcional(firstName?: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

//funcion con valores pre seteados
function fullNameSeteado(firstName: string = 'pedro', lastName: string = 'diaz'): string {
    return `${firstName} ${lastName}`;
}

const pedro = fullName('pedro', 'diaz');
const pedroOpcional = fullNameOpcional('pedro');
const pedroSeteado = fullNameSeteado();


//interfaces
interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Verde,
}

function area(r: Rectangulo): number {
    return r.alto * r.alto;
} 

const areaRect = area(rect);

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}