function maxIndex(arr) {
    // Verificar si el arreglo está vacío
    if (arr.length === 0) {
      return -1;
    }
  
    // Variables para almacenar el índice y el valor máximo
    let max = arr[0];
    let maxIndex = 0;
  
    // Iterar sobre el arreglo y actualizar el valor máximo y su índice
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  
    // Devolver el índice del valor máximo
    return maxIndex;
  }
        
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1