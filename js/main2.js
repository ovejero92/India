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
  
let listaProductos = [productoA , productoB , productoC , productoD , productoE , productoF]

for(const producto of listaProductos){
    let card = document.createElement("div")
    card.innerHTML=`<h3>${producto.nombre}</h3>
                    <p>${producto.precio}</p>
                    <p>Unidades restantes: ${producto.stock}</p> `
                    
    document.body.append(card)                  
}