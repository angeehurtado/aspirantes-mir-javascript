// Crea la variable "receta" con un objeto literal vacío
const receta = {};

// Agrega la propiedad "nombre" al objeto "receta"
receta.nombre = "Sandwich";

// Agrega la propiedad "ingredientes" al objeto "receta" como un arreglo vacío
receta.ingredientes = [];

// Agrega un objeto al arreglo "ingredientes" con las propiedades especificadas
receta.ingredientes.push({
  nombre: "Pan",
  cantidad: 2
});

// Agrega otro objeto al arreglo "ingredientes" con las propiedades especificadas
receta.ingredientes.push({
  nombre: "Queso",
  cantidad: 1
});

// Imprime en la consola el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre); // imprime "Pan"

// Suma las cantidades de los ingredientes
let total = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
  total += receta.ingredientes[i].cantidad;
}

// Muestra el resultado de la suma en la consola
console.log("La cantidad total de ingredientes es: " + total);
