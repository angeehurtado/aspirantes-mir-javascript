function max(arr){
    // Variable para almacenar el valor máximo en un arreglo vacío
    let max = arr[0];

    // Iterar sobre el arreglo e identificar el valor máximo  
    for(let i=0; i<arr.length; i ++){

    //comprobar si el arreglo en la posición i es mayor a max, entonces max adquiere el nuevo valor de i
        if (arr[i]>max){
            max=arr[i]
    }
}
    // Devolver el resultado
    return max
    }


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined