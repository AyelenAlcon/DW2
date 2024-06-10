let producto = {
    nombre: 'Camiseta',
    precio: 2500,
    stock: 10,
}
producto.nombre = "Zapatillas"

producto.categoria = "Calzado"

delete producto.stock

console.log(producto)