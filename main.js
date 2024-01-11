// Menú del restaurante
//la idea es que los indices de la matriz precio coincide con la matriz productos
const precios = [25000, 26000, 30000, 40000, 20000]
const productos = ["PERLAS DE MAR", "CROSTINIS DE JAMÓN IBÉRICO", "BRAVAS DE LUJO", "ENSALADA DE PULPO A LA GALLEGA", "CARPACCIO DE ATÚN ROJO"]

// Función para simular el proceso de pedido
function procesoDePedido() {
    alert("¡Bienvenido a nuestro RestoBar Paulo's!\nA continuación, te guiaremos a través del proceso de pedido.");

    // Pedido de platos
    //limpiamos arreglo pedido
    let pedidocantidad = [0, 0, 0, 0, 0]

    //itero hasta que ocurra un break
    while (true) {


        //aplicando comando prompt
        let opcion = prompt("Menú:\n 0. PERLAS DE MAR ($25.000)\n 1. CROSTINIS DE JAMÓN IBÉRICO ($26.000)\n 2. BRAVAS DE LUJO ($30.000)\n 3. ENSALADA DE PULPO A LA GALLEGA ($40.000)\n 4. CARPACCIO DE ATÚN ROJO ($20.000)\n 5. Finalizar pedido\n\nIngresa el número del plato:");

        // Verificar si el usuario quiere finalizar el pedido opcion 5
        if (opcion === "5") {
            break;
        }

        // Verificar si la opción es válida
        if (productos[opcion]) {

            //definimos variable cantidad, en esta parte ya sabe que producto seleccionamos, solo agregamos cantidad
            let cantidad = parseInt(prompt("Ingresa la cantidad deseada para " + productos[opcion] + ":"));

            // Verificar si la cantidad es válida
            if (!isNaN(cantidad) && cantidad > 0) {

                //si es una opcion valida sumo cantidades
                if (opcion === "0") {

                    pedidocantidad[0] = pedidocantidad[0] + cantidad;

                } else if (opcion === "1") {

                    pedidocantidad[1] = pedidocantidad[1] + cantidad;

                } else if (opcion === "2") {

                    pedidocantidad[2] = pedidocantidad[2] + cantidad;

                } else if (opcion === "3") {

                    pedidocantidad[3] = pedidocantidad[3] + cantidad;

                } else if (opcion === "4") {

                    pedidocantidad[4] = pedidocantidad[4] + cantidad;

                }

                //aplico comando alert para mostrar la opcion seleccionada con su cantidad
                alert("Añadido al pedido: " + cantidad + " " + productos[opcion]);
            } else {
                //muestro mensaje de error si ingreso cualquier cosa
                alert("Cantidad no válida. Por favor, ingresa un número entero mayor que 0.");
            }
        } else {
            //muestro mensaje que debe ingresar una opcion dentro 0 y 4
            alert("Opción no válida. Por favor, selecciona un plato válido.");
        }
    }

    // Resumen del pedido entro cuando seleccione opcion

    //chequeo primero que exista algo en el arreglo pedido
        if (pedidocantidad.some(valor => valor !== 0)) {

        //defino variabel total que es la suma * cantidad
        let totalPedido = 0;

        //defino variable que va a concantenar lo seleccionamos + total y muestro en el comando confirm
        let resumen = "Resumen del pedido:\n";

         //recorro arreglo pedido para concatenar todo lo seleccionado
        for (let i=0; i<pedidocantidad.length; i++) {
        
          //concateno variable resumen con el detalle del pedido
          if (pedidocantidad[i]>0)
          {
          resumen += pedidocantidad[i] + " " + productos[i] + " - $" + precios[i] * pedidocantidad[i] + "\n";
          }

          //voy sumando el total * cantidad
          totalPedido += precios[i] * pedidocantidad[i];
        
        }

        //le agrego el valor total con la glosa Total: $ y además el total sumado
        resumen += "\nTotal: $" + totalPedido;

        //aplicando comando confirm
        confirm(resumen + "\n\n¿Deseas finalizar el pedido?") ? alert("¡Gracias por tu pedido! Te esperamos pronto.") : alert("Tu pedido ha sido cancelado. ¡Esperamos verte pronto!");
    } else {
        //si seleccione 5 pero no tengo nada agregado en el pedido muestro este mensaje
        alert("No has seleccionado ningún plato. El pedido ha sido cancelado.");
    }
}


