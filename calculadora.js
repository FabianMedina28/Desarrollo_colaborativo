const suma = require("./modulos/suma");
const resta = require ("./modulos/resta");
const multiplicacion = require ("./modulos/multiplicacion");
const division = require ("./modulos/division");
const {leerDatos} = require ("./modulos/app.js")
const leer = leerDatos()

let num1 = +process.argv[2]
let num2 = +process.argv[3]
let cb = process.argv[4]

function calculadora(num1, num2, callback) {
let operacion =" ";
switch (process.argv[4]) {
    case "suma": 
    callback = suma 
    operacion = "suma"
        break;
    case "resta":
    callback = resta
    operacion = "resta"
        break;
    case "multiplicacion": 
    callback = multiplicacion
    operacion = "multiplicacion"
        break;
    case "division": 
    callback = division
    operacion = "division"
        break;
    default:
        "operación no válida"
        break;
}

let resultado = callback(num1, num2)
let historial = {
operacion:operacion,
resultado:resultado}
return historial
}
const {guardarDatos} = require ("./modulos/app.js")
let calcular = calculadora (num1,num2,cb)
leer.push(calcular)
guardarDatos(leer)
