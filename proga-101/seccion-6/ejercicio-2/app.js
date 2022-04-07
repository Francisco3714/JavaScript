
let persona1 = {
    nombre: 'Francisco',
    edad: 21
};

let persona2 = {
    nombre: 'Christian',
    edad: 25
};

let persona3 = {
    nombre: 'Amara',
    edad: 22
};

let personas = [ persona1, persona2, persona3 ]

// Forma hecha por mi
for (let i = 0; i < personas.length; i++) {
    console.log( personas[i].nombre +' -- ' + personas[i].edad );
}

// Forma hecha por Fernando Herrera
for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    console.log( persona.nombre +' -- ' + persona.edad);
}
