
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let formula;
for (let i = 0; i < numeros.length; i++) {
    formula = numeros[i] % 2;
    if (formula === 0) {
        console.log( numeros[i] + ' es un numero par' );
    }else{
        console.log( numeros[i] + ' es un numero impar' );
    }
}
