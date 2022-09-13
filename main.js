

document.addEventListener('DOMContentLoaded', () => {
 
    let carrito = [];
        const DOMitems = document.getElementById('items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');
       
        function AllProducto(id,nombre,precio,stock){
            this.id = id
            this.nombre = nombre
            this.precio = precio
            this.stock =stock
        } 
        let listaDeProductos = [  {
            "id": 1,
            "nombre": "coca",
            "precio": 280,
            "stock": 100
            },
            {
            "id": 2,
            "nombre": "sprite",
            "precio": 300,
            "stock": 200
            },
            {
            "id": 3,
            "nombre": "agua",
            "precio": 180,
            "stock": 500
            },
            {
            "id": 4,
            "nombre": "manaos",
            "precio": 210,
            "stock": 340
            },
            {
            "id": 5,
            "nombre": "levite",
            "precio": 240,
            "stock": 10
            },
            {
            "id": 6,
            "nombre": "fernet",
            "precio": 1200,
            "stock": 2000
            }];

        
        
        function renderizarProductos() {
                listaDeProductos.forEach((info) => {
                    //estructura
                    const miNodo = document.createElement('div');
                    miNodo.classList.add('card', 'col-sm-4');
                    //body
                    const miNodoCardBody = document.createElement('div');
                    miNodoCardBody.classList.add('card-body');
                    //titulo
                    const miNodoTitle = document.createElement('h5');
                    miNodoTitle.classList.add('card-title');
                    miNodoTitle.innerText = info.nombre;
                    //precio
                    const miNodoPrecio = document.createElement('p');
                    miNodoPrecio.classList.add('card-text');
                    miNodoPrecio.innerText = `$${info.precio}`;
                    //stock
                    const miNodoStock = document.createElement('p');
                    miNodoStock.classList.add('card-text');
                    miNodoStock.innerText = `stock: ${info.stock}`;
                    //boton
                    const miNodoBoton = document.createElement('button');
                    miNodoBoton.classList.add('btn', 'btn-primari');
                    miNodoBoton.innerText = '+';
                    miNodoBoton.setAttribute('marcador', info.id);
                    miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                // append
                miNodoCardBody.append(miNodoTitle);
                miNodoCardBody.append(miNodoPrecio);
                miNodoCardBody.append(miNodoStock);
                miNodoCardBody.append(miNodoBoton);
                miNodo.append(miNodoCardBody);
                DOMitems.append(miNodo);
            });
        }
        function anyadirProductoAlCarrito(e) {
            carrito.push(e.target.getAttribute ('marcador'))
            renderizarCarrito();
            guardarCarritoEnLocalStorage();
        }
        function renderizarCarrito() {
            DOMcarrito.innerText = '';
            const carritoSinDuplicados = [...new Set(carrito)];
            carritoSinDuplicados.forEach((item) => {
                const miItem = listaDeProductos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    return itemId === item ? total += 1 : total;
                }, 0);
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-rigth', 'mx-2');
                miNodo.innerText = `${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio} `;
                const miBoton = document.createElement('button');
                miBoton.classList.add('list-group-item', 'tect-rigth', 'mx-2');
                miBoton.innerText = 'x';
                miBoton.style.marginleft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);

                miNodo.append(miBoton);
                DOMcarrito.append(miNodo);
                  });
     
 
        DOMtotal.innerText = calcularTotal();
        } 
        function borrarItemCarrito(e) {
            const id = e.target.dataset.item;
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            renderizarCarrito();
            guardarCarritoEnLocalStorage();
        }
        function calcularTotal() {
            return carrito.reduce((total, item) => {
                const miItem = listaDeProductos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                return total + miItem[0].precio;
            }, 0).tofixed(2);
        }
        function vaciarCarrito() {
            Swal.fire({
                icon: 'warning',
                text:'estas seguro que queres vaciar tu lista?',
                showConfirmButton:true,
                confirmButtonText:'vaciar',
                denyButtonText: 'no vaciar',
            }).then((result) =>{
                if(result.isConfirmed) {
                    swal.fire('vaciamos la lista!', '','success')
                    carrito = [];
                    renderizarCarrito();
                    localStorage.clear();
        
                }
            })
        }
        function guardarCarritoEnLocalStorage () {
            localStorage.setItem('carrito', JSON.stringify(carrito));
        }
        function cargarCarritoDeLocalStorage () {
            if (localStorage.getItem('carrito') !== null) {
                carrito = JSON.parse(localStorage.getItem('carrito'));
            }
        }
        DOMbotonVaciar.addEventListener("click", vaciarCarrito);

        cargarCarritoDeLocalStorage();
        renderizarProductos();
        renderizarCarrito();
    });
    const alerta = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        }
    
        let boton = document.getElementById('boton-finaliar')
        boton.addEventListener('click', alerta)
        
        
       