const suma = require("./suma");
const resta = require ("./resta");
const multiplicacion = require ("./multiplicacion");
const division = require ("./division");
const {leerDatos} = require ("../app.js")
const leer = leerDatos()
function calculadora(num1, num2, callback) {
let operacion;
switch (process.argv[4]) {
    case "suma": callback = suma 
        break;
    case "resta": callback = resta
        break;
    case "multiplicacion": callback = multiplicacion
        break;
    case "division": callback = division
        break;
    default:
        "operación no válida"
        break;
}
if (callback == suma) {
    return operacion = "suma"
}else if(callback == resta){
    return operacion = "resta"
}else if(callback == multiplicacion){
    return operacion = "multiplicacion"
}else if(callback == division){
    return operacion = "division"
}else{
    "operacion invalida"
}
let resultado = callback(num1, num2)
let historial = {
operacion:operacion,
resultado:resultado}
return historial
}
const {guardarDatos} = require ("../app.js")
let calcular = calculadora (+process.argv[2],+process.argv[3])
let leyendo = leer.push(calcular)
guardarDatos(leer)