// Iteración #6: Función swap

/* Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

let nameList = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(array, numb1, numb2) {
  let nam1 = array[numb1];
  let nam2 = array[numb2];
  array[numb1] = nam2;
  array[numb2] = nam1;
}

console.log(nameList);
swap(nameList, 0, 2);
console.log(nameList);