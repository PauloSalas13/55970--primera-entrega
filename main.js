// Variables para los productos y precios
let precioPerlasDeMar = 25000;
let precioCrostinis = 26000;
let precioBravas = 30000;
let precioEnsaladaPulpo = 40000;
let precioCarpaccioAtun = 20000;

let productoPerlasDeMar = "PERLAS DE MAR";
let productoCrostinis = "CROSTINIS DE JAMÓN IBÉRICO";
let productoBravas = "BRAVAS DE LUJO";
let productoEnsaladaPulpo = "ENSALADA DE PULPO A LA GALLEGA";
let productoCarpaccioAtun = "CARPACCIO DE ATÚN ROJO";

// Cantidades de pedido inicializadas en 0
let pedidocantidadPerlasDeMar = 0;
let pedidocantidadCrostinis = 0;
let pedidocantidadBravas = 0;
let pedidocantidadEnsaladaPulpo = 0;
let pedidocantidadCarpaccioAtun = 0;

let titulo = "";

// Función para simular el proceso de pedido
function procesoDePedido() {
    alert("¡Bienvenido a nuestro RestoBar Paulo's!\nA continuación, te guiaremos a través del proceso de pedido.");

    while (true) {
        let opcion = prompt("Menú:\n 0. " + productoPerlasDeMar + " ($" + precioPerlasDeMar + ")\n 1. " + productoCrostinis + " ($" + precioCrostinis + ")\n 2. " + productoBravas + " ($" + precioBravas + ")\n 3. " + productoEnsaladaPulpo + " ($" + precioEnsaladaPulpo + ")\n 4. " + productoCarpaccioAtun + " ($" + precioCarpaccioAtun + ")\n 5. Finalizar pedido\n\nIngresa el número del plato:");

        if (opcion === "5") {
            break;
        }

        if (opcion >= 0 && opcion <= 4) {

            if (opcion == 0) {
                titulo = productoPerlasDeMar;
            }
            if (opcion == 1) {
                titulo = productoCrostinis;
            }
            if (opcion == 2) {
                titulo = productoBravas;
            }
            if (opcion == 3) {
                titulo = productoEnsaladaPulpo;
            }
            if (opcion == 4) {
                titulo = productoCarpaccioAtun;
            }

            let cantidad = parseInt(prompt("Ingresa la cantidad deseada para " + titulo + ":"));
            if (!isNaN(cantidad) && cantidad > 0) {
                switch (opcion) {
                    case "0":
                        pedidocantidadPerlasDeMar += cantidad;
                        break;
                    case "1":
                        pedidocantidadCrostinis += cantidad;
                        break;
                    case "2":
                        pedidocantidadBravas += cantidad;
                        break;
                    case "3":
                        pedidocantidadEnsaladaPulpo += cantidad;
                        break;
                    case "4":
                        pedidocantidadCarpaccioAtun += cantidad;
                        break;
                }
                alert("Añadido al pedido: " + cantidad + " " + titulo);
            } else {
                alert("Cantidad no válida. Por favor, ingresa un número entero mayor que 0.");
            }
        } else {
            alert("Opción no válida. Por favor, selecciona un plato válido.");
        }
    }

    if (pedidocantidadPerlasDeMar > 0 || pedidocantidadCrostinis > 0 || pedidocantidadBravas > 0 || pedidocantidadEnsaladaPulpo > 0 || pedidocantidadCarpaccioAtun > 0) {
        let totalPedido = 0;
        let resumen = "Resumen del pedido:\n";

        if (pedidocantidadPerlasDeMar > 0) {
            resumen += pedidocantidadPerlasDeMar + " " + productoPerlasDeMar + " - $" + precioPerlasDeMar * pedidocantidadPerlasDeMar + "\n";
            totalPedido += precioPerlasDeMar * pedidocantidadPerlasDeMar;
        }

        if (pedidocantidadCrostinis > 0) {
            resumen += pedidocantidadCrostinis + " " + productoCrostinis + " - $" + precioCrostinis * pedidocantidadCrostinis + "\n";
            totalPedido += precioCrostinis * pedidocantidadCrostinis;
        }

        if (pedidocantidadBravas > 0) {
            resumen += pedidocantidadBravas + " " + productoBravas + " - $" + precioBravas * pedidocantidadBravas + "\n";
            totalPedido += precioBravas * pedidocantidadBravas;
        }

        if (pedidocantidadEnsaladaPulpo > 0) {
            resumen += pedidocantidadEnsaladaPulpo + " " + productoEnsaladaPulpo + " - $" + precioEnsaladaPulpo * pedidocantidadEnsaladaPulpo + "\n";
            totalPedido += precioEnsaladaPulpo * pedidocantidadEnsaladaPulpo;
        }

        if (pedidocantidadCarpaccioAtun > 0) {
            resumen += pedidocantidadCarpaccioAtun + " " + productoCarpaccioAtun + " - $" + precioCarpaccioAtun * pedidocantidadCarpaccioAtun + "\n";
            totalPedido += precioCarpaccioAtun * pedidocantidadCarpaccioAtun;
        }

        resumen += "\nTotal: $" + totalPedido;

        confirm(resumen + "\n\n¿Deseas finalizar el pedido?") ? alert("¡Gracias por tu pedido! Te esperamos pronto.") : alert("Tu pedido ha sido cancelado. ¡Esperamos verte pronto!");
    } else {
        alert("No has seleccionado ningún plato. El pedido ha sido cancelado.");
    }
}
procesoDePedido();


