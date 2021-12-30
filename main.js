// ---------------------- MENU ----------------------

function scan(parametro1, parametro2, parametro3) {

    let menu = true;

    do {

        option = parseInt(prompt("Elige el tipo de análisis" + " 1. " + parametro1 + " 2. " + parametro2 + " 3. " + parametro3 + " o presiona 0 para Salir."));

        if (option == 1) {
            alert("Your " + parametro1 + " is about to start.")
            break;
        } else if (option == 2) {
            alert("Your " + parametro2 + " is about to start.")
            break;
        } else if (option == 3) {
            alert("Your " + parametro3 + " is about to start.")
            break;
        } else if (option == 0) {
            break;
        } else {
            alert("Elegí una de las cuatro opciones disponibles");
        }

    } while (menu = true);
}

scan("Quick Scan", "Full Scan", "Custom Scan");

// ---------------------- CÁLCULO DE PROMOCIÓN ----------------------

function breezyPro(price, discount) {
    return (price * discount);
}

let price = parseInt(prompt("La suscripción anual de Breezy PRO es de U$D 49, ingrese dicho importe y descubra su precio con descuento."));
let promocion = breezyPro(price, 0.70);
alert("El precio promocional de Breezy PRO es de U$D " + promocion);

// ---------------------- CÁLCULO DE TIEMPO DE ANÁLISIS ----------------------

function gigabytes() {
    return parseInt(prompt("¿Cúantos Gigabytes de almacenamiento usados tiene tu equipo?"));
}

function scanTime(gb) {
    const quick = 0.03;
    return (gb * quick);
}

function resultado(resultado) {
    alert("El tiempo de análisis con Quick Scan es de " + resultado + " minutos");
}


resultado(scanTime(gigabytes()));