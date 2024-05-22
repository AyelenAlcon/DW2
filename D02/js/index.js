let producto1 = 'Macetas'
let precioU = 5000
let cantidad

alert('Hola! estás por comprar ' + producto1 + ' y su precio es de $' + precioU)
let cantidadDeseada = prompt('Ingrese la cantidad que desee comprar ')

const costoTotal = precioU * cantidadDeseada

alert("Usted compró " + cantidadDeseada + " " + producto1 + " " + "el costo total es de $" + costoTotal)