let nombreProducto = "Macetas";
let precioUnitario = 5000;
let cantidadDeseada = parseInt (prompt('Ingrese la cantidad de ' + nombreProducto + " que desea comprar"))

let costoTotalSinDescuento = precioUnitario * cantidadDeseada

if(cantidadDeseada >= 5){
    costoTotalSinDescuento *= 0.9
}

alert(`El costo total es ${cantidadDeseada} ${nombreProducto} es: $${costoTotalSinDescuento}`)