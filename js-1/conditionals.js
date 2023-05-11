function calcularColor (num) {
    let color = " "
    if (num === 1) {
        color = "El color es negro";
    } else if (num === 2) {
        color = "El color es blanco";
    } else if (num === 3) {
        color = "El color es azul";   
    } else {
        color = "El color es verde";
    }
    return color
}

console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"