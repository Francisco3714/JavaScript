
let numeros = [1, 6, 8, 4, 2, 7, 20, 3, 5 ];
let mayor = -99;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log( 'El numero de mayor valor es: ' + mayor );
