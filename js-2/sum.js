
function sum(arr){

    // Variable para almacenar la suma
    let suma = 0;

    // Iterar sobre el arreglo y actualizar la suma
    for(let i=0; i<arr.length; i ++){
        suma+=arr[i]
    }

    // Devolver la suma
    return suma
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

