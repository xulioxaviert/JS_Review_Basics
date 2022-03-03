// Iteración #4: Métodos findArrayIndex

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función

let animalList = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      flag = true;
        console.log("la posición de " + text + " en el array es " + i);
    }
  }

  if (flag == false) {
    console.log("La palabra " + text + " no está en el array");
  }
}

findArrayIndex(animalList, "Caracol");
