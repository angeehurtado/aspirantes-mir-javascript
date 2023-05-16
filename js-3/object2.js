// Definir variable tipo objeto literal
const persona = {
    nombre: "Angee Hurtado",
    edad: "28",
    ciudad: "Cucuta",
    profesion: "Ingeniera Civil",
}
console.log(persona.nombre);// imprime Angee Hurtado
console.log(persona.edad);// imprime 28
console.log(persona.ciudad);// imprime Cucuta
console.log(persona.profesion);// imprime Ingeniera Civil


// Crea funcion presentacion
function presentacion(persona) {
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
}

// Llama a la función "presentacion" y almacena el resultado en la variable "mensaje"
const mensaje = presentacion(persona);

// Imprime en la consola el valor de la variable "mensaje"
console.log(mensaje);

// Agrega la propiedad "hobbies" al objeto "persona"
persona.hobbies = ["programar", "squash", "piano"];

// Imprime en la consola la propiedad "hobbies" del objeto "persona"
console.log(persona.hobbies);

// Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies
for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}