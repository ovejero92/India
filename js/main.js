class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}
const productoA = new Producto("coca", 2520, 100)
const productoB = new Producto("sprite", 1760, 100)
const productoC = new Producto("agua", 1330, 100)
const productoD = new Producto("manaos", 720, 100)
const productoE = new Producto("levite", 730, 100)
const productoF = new Producto("fernet", 960, 100)


let cantidadCompras = prompt("Ingrese la cantidad de productos distinto que quiere comprar: \n- coca\n- sprite\n- agua\n- manaos\n- levite\n- fermet")
let precioTotal = 0
function calculoPrecio(cantidad , precio){
precioTotal += cantidad * precio
}

function calculoStock (cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("el precio total es de: $" + (cantidad * producto.precio))
    }
    else{
alert("no disponemos de cantidad en stock. nuestro stock actual es de: " + stock + "unidades")
        }
    
}

for( let i = 0; i < cantidadCompras; i++){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar:  \n- coca\n- sprite\n- agua\n- manaos\n- levite\n- fernet")
    let cantidad1 = prompt("ingrese la cantidad del producto que quiere comprar:")
    if(compra1 == productoA.nombre.toLowerCase()){
        calculoStock (cantidad1, productoA.stock, productoA.precio)
    }
    else if(compra1 == productoB.nombre.toLowerCase()){
        calculoStock (cantidad1, productoB.stock, productoB.precio)
    }
    else if(compra1 == productoC.nombre.toLowerCase()){
        calculoStock (cantidad1, productoC.stock, productoC.precio) 
    }
    else if(compra1 == productoD.nombre.toLowerCase()){
        calculoStock (cantidad1, productoD.stock, productoD.precio)  
    }
        else if(compra1 == productoE.nombre.toLowerCase()){
            calculoStock (cantidad1, productoE.stock, productoE.precio) 
    }
    else if(compra1 == productoF.nombre.toLowerCase()){
        calculoStock (cantidad1, productoF.stock, productoF.precio)  
    }
    else{
        alert("no tenemos ese producto")
    }
}
console.log(productoA)