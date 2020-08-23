
function suma(x, y) {
  // suma(2,3) // Retorna 5
  return x+y;
}
suma (2,3)

function multiplica(x, y) {
  // multiplica(2,3) // Retorna 6
  return x*y;
}
multiplica (2,3)

function mayorQueTreinta(num) {
  // mayorQueTreinta(50) // Retorna true
if( num>30 == true){
  return true;
}
else{
  return false;
}
}
mayorQueTreinta (40)


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  if (saludo == "aleman"){
    return console.log("Guten Tag!")
  }

  else if (saludo == "mandarin"){
    return console.log("Ni Hao!")
  }

  else if (saludo == "ingles"){
    return console.log("Hello!")
  }

  else {
    return console.log("Hola")
  }
}
saludo ("ingles")

function esEntero(numero) {
  // esEntero(50) // Retorna true
  // esEntero(0.8) // Retorna false
 if (numero % 1 == 0){
   return true;
 }
 else{
   return false;
 }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
if (numero/3 % 1 == 0){
  return consolo.log("fizz");
}
else if (numero/5 % 1 == 0){
  return console.log("buzz");
}
else if (numero/5 % 1 == 0 || numero/3 % 1 == 0 ){
  return console.log("fizzBuzz");
}
}

fizzBuzz (20)

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  

}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
 return palabras.join()
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"

}


module.exports = {
  suma,
  multiplica,
  mayorQueTreinta,
  saludo,
  esEntero,
  fizzBuzz,
  obtenerLargoDelArray,
  dePalabrasAFrase,
  promedioResultadosTest,
  esPrimo
}
