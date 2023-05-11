function suma(x) {
    var suma = 0
    for (var i=1; i<=x; i++){
        if (x >= 1) {
            suma += i
        }
   }
    return suma
}

console.log(suma(4)) // 1 + 2 + 3 + 4 = 10
console.log(suma(10)) // 55
console.log(suma(15)) // 120