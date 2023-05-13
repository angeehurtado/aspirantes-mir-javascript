function join(arr) {
    // Verificar si el arreglo está vacío
    if (arr.length === 0) {
      return "";
    }
  
    // Variable para almacenar el resultado
    let result = arr[0];
  
    // Iterar sobre el arreglo y agregar cada elemento al resultado
    for (let i = 1; i < arr.length; i++) {
      result += " " + arr[i];
    }
  
    // Devolver el resultado
    return result;
  }

console.log(join(["unir", "tres", "palabras"])) // "unir tres palabras"