// definir variable tipo objeto
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
// declara funcion saluda
    saluda: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
  }

  // imprimir edad de variable definida
  console.log(pedro.edad);// imprime 30

 // adicionar propiedad de estatura
  pedro.estatura = 1.8;

// imprimir estatura de variable definida
   console.log(pedro.estatura);// imprime 1.8

  // eliminar propiedad activo
  delete pedro.activo;

  //imprimir propiedades, una línea por propiedad y separando la llave y el valor con dos puntos
    console.log("  Nombre: " + pedro.nombre);
    console.log("  Edad: " + pedro.edad);
    console.log("  Hobbies: " + pedro.hobbies.join(", "));
    console.log("  Estatura: " + pedro.estatura);

    pedro.saluda()// "Hola, me llamo Pedro Perez"
  


