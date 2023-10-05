
//variables globales *ocupare luego
let iva = 0.19
let AddCarrito
let DelCarrito
let DelCarrito2
let entradaUsuario 
let indiceCarrito 
let indiceSistema
let DelSistema

//arreglo de prueba 
const funebres = [{producto: "rosas", precio: 23490},{producto: "Almijos", precio: 12490}]
const carrito = []
//funciones
function sumarPrecios(totalNeto) {
    let totalFin = 0;
  
    for (let i = 0; i < totalNeto.length; i++) {
        totalFin += totalNeto[i].precio
    }
  
    return totalFin
  }
  
function totalIva(costo, iva) {
    let total = costo * iva
    return total
}

let info = confirm("Bienvenido a Floreria López \n\n\nv1.1")

while (info) {
    let consulta = prompt(
        "(1) Ver y Comprar productos"+" ("+funebres.length+")"+ 
        "\n(2) Ver carrito"+" ("+carrito.length+")"+
        "\n(3) Borrar productos carrito"+" ("+carrito.length+")"+
        "\n(4) Agregar productos al Sistema\n(5) Borrar productos del Sistema\n(0) Salir"
    )

    switch (consulta) {

        case "0":
            alert("Hasta pronto, que tengas un gran día!")
            info = false
            break

        case "1":
                                      
                    
            const mensajeProductos = 
            "Arreglos Florares Disponibles:\n*Selecciona el número de índice para agregar un producto al carrito\n\n"
        
            if (funebres.length > 0) {
                let ingresoTecladoProducto = ""

                for (let i = 0; i < funebres.length; i++) {
                    const producto = funebres[i]
                    ingresoTecladoProducto += `(${i + 1}): Nombre: ${producto.producto}\nPrecio: $${producto.precio}\n`
                }

                do{
                    
                    entradaUsuario = parseInt(prompt(mensajeProductos + ingresoTecladoProducto))
                    
                
                } while (isNaN(entradaUsuario)  ||entradaUsuario < 1 || entradaUsuario > funebres.length )
                
                if (entradaUsuario <= funebres.length) {
                    const productoAgregadoSistema = funebres[entradaUsuario - 1]
                    carrito.push(productoAgregadoSistema)
                    alert(`Producto Agregado:\nNombre: ${productoAgregadoSistema.producto}\nPrecio: $${productoAgregadoSistema.precio}`)
                } else {
                    alert("Debes seleccionar un índice válido.")
                }

            } else {alert("No hay productos disponibles.")}

            break

        case "2":
                //llamo a la funcion totalprecio *no olvidar
                const costo = sumarPrecios(carrito)
                const valorfinalIva = totalIva(costo, iva)
                
                const mensajeCarrito = "Productos Carrito:\n"+ "TOTAL NETO: $" + parseInt(costo) +" + IVA(%19)\n"+ "VALOR TOTAL: $" + parseInt(valorfinalIva+costo) + "\n\n"

                if (carrito.length > 0) {
                    let ingresoTecladoCarrito = ""

                    for (let i = 0; i < carrito.length; i++) {
                        const producto = carrito[i]
                        ingresoTecladoCarrito += `${i + 1}: Nombre: ${producto.producto}\nPrecio: $${producto.precio}\n`
                    }

                    alert(mensajeCarrito + ingresoTecladoCarrito)
                } else {
                    alert("No hay productos en tu carrito.")
                }

        break


        case "3":
            const mensajeBorrarCarrito = "Seleccione el indice del Producto a Borrar:\n"

                
            if (carrito.length > 0) {
                let ingresoBorradoProducto = ""

                for (let i = 0; i < carrito.length; i++) {
                    const producto = carrito[i]
                    ingresoBorradoProducto += `${i + 1}: Nombre: ${producto.producto}\nPrecio: $${producto.precio}\n`
                }

                do{
                    indiceCarrito = parseInt(prompt(mensajeBorrarCarrito + ingresoBorradoProducto))
                    
             
                } while (isNaN(indiceCarrito)  ||indiceCarrito < 1 || indiceCarrito > carrito.length )
            

                if (indiceCarrito <= carrito.length) {
                    const productoBorradoSistema = carrito.splice(indiceCarrito - 1, 1)[0]
                    alert(`Producto eliminado:\nNombre: ${productoBorradoSistema.producto}\nPrecio: $${productoBorradoSistema.precio}`)
                } else {
                    alert("Debes seleccionar el índice correcto.")
                }
    
            } else {
                alert("No hay productos disponibles.")
            }


        break
        case "4":
         
            let IngresoProducto = parseInt(prompt("Ingrese la cantidad de productos a Agregar")) 
            
            if (IngresoProducto>0){
                for (let i = 0; i < IngresoProducto; i++) {   
                    
                    producto = prompt("Ingrese el nombre del producto:")
                    if(producto!=""){

                        precio = parseFloat(prompt("Ingrese el precio del producto:"))
                        if (!isNaN(precio)) {
                                funebres.push({ producto, precio })
                                /* console.log(funebres) */
                                alert(`Producto agregado:\nNombre: ${producto}\nPrecio: $${precio}`)
                        } else {
                            alert("Por favor, ingrese datos válidos.")
                            info
                        }  

                    }else{alert("Por favor, ingrese datos válidos.")}

                }
            }else{alert("Por favor, ingrese datos válidos.")}    
        break
        case "5":

            const mensajeBorrarSistema = "Seleccione el indice del Producto a Borrar:\n"

                    
            if (funebres.length > 0) {
                let ingresoBorradoProducto = ""

                for (let i = 0; i < funebres.length; i++) {
                    const producto = funebres[i]
                    ingresoBorradoProducto += `${i + 1}: Nombre: ${producto.producto}\nPrecio: $${producto.precio}\n`
                }

                do{
                    indiceSistema = parseInt(prompt(mensajeBorrarSistema + ingresoBorradoProducto))
                    
            
                } while (isNaN(indiceSistema)  ||indiceSistema < 1 || indiceSistema > funebres.length )
            
                if (indiceSistema <= funebres.length) {
                    const productoBorradoSistema = funebres.splice(indiceSistema - 1, 1)[0]
                    alert(`Producto eliminado:\nNombre: ${productoBorradoSistema.producto}\nPrecio: $${productoBorradoSistema.precio}`)
                } else {
                    alert("Debes seleccionar el índice correcto.")
                }
               
            } else {
                alert("No hay productos disponibles.")
            }


        break

        default:
            alert("Opción no válida, intenta nuevamente.")
    }
}
