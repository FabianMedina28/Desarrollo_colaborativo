const suma = require("./modulos/suma");
const resta = require ("./modulos/resta");
const multiplicacion = require ("./modulos/multiplicacion");
const division = require ("./modulos/division");
const {leerDatos} = require ("./modulos/app.js")
const leer = leerDatos()

let numero1 = +process.argv[2]
let numero2 = +process.argv[3]
let calculo = process.argv[4]

if (process.argv[2] === "historial"){
    console.log (leer)
}else{
function calculadora(numero1, numero2, callback) {
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

let resultado = callback(numero1, numero2)
let historial = {
operacion:operacion,
resultado:resultado}
return historial
}
const {guardarDatos} = require ("./modulos/app.js")
let calcular = calculadora (numero1,numero2,calculo)
leer.push(calcular)
guardarDatos(leer)


}

