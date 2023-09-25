const fs = require('fs')
function leerDatos (){
let leer = fs.readFileSync("./resultado.json", "utf-8")
let array = JSON.parse(leer)
return array
}
function guardarDatos(parametro){
let pasarJson = JSON.stringify(parametro)
fs.writeFileSync("./resultado.json", pasarJson)
}

module.exports = {
leerDatos,
guardarDatos
}