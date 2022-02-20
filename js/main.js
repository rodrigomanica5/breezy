// --------------- CLASS ---------------

// Se define una clase de objetos.

class Malware {
    constructor(var1, var2, var3, var4) {
        this.type = var1;
        this.name = var2;
        this.risk = var3;
        this.location = var4;
    };
};

// --------------- ARRAY MALWARE ---------------

// Se crean objetos de clase Malware y se pushean en un array.

const malwareArray = [];

malwareArray.push(new Malware("Worm", "I-Worm/Mydoom.K", "Critical", "C:\\Windows\\System32\\catroot2\\mydoom.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Fakealert.365", "Low", "C:\\Windows\\System32\\catroot2\\sdkey.exe"));
malwareArray.push(new Malware("Worm", "Net-Worm.Win32.Koobface.b", "Medium", "C:\\Windows\\System32\\catroot2\\koobface.exe"));
malwareArray.push(new Malware("Adware", "Adware.Win32.Look2me.ab", "High", "C:\\Windows\\System32\\Boot\\look2me.exe"));
malwareArray.push(new Malware("Trojan", "Trojan IRC/Backdor.SdBot4.FRV", "Medium", "C:\\Windows\\SysWOW64\\sdbot.exe"));
malwareArray.push(new Malware("Ransomware", "CryptoLocker", "Critical", "C:\\Windows\\SysWOW64\\cryptolocker.exe"));
malwareArray.push(new Malware("Ransomware", "WannaCry", "Critical", "C:\\Windows\\debug\\wannacry.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Qoologic - Key Logger", "High", "C:\\Windows\\debug\\qoologic.exe"));
malwareArray.push(new Malware("Spyware", "Win32/Hoax.Renos.HX", "Low", "C:\\Windows\\System32\\Boot\\hoax.exe"));

console.log(malwareArray);

// Declaro un nuevo array vacio.

let newMalwareArray = [];

// --------------- FUNCION MATH.RANDOM ---------------

// Esta funcion servira para eligir de forma aleatoria los objetos que van a integrar el newMalwareArray. Los numeros posibles coinciden con los indices del malwareArray. De 0 a 9.

function random() {
    return Math.floor(Math.random() * 9);
};

// --------------- LOCAL & SESSION STORAGE ---------------

// Se define una funcion que convierte el newMalwareArray a formato JSON para asi poder almacenarlo en el localStorage.
// Una vez almacenado, se recupera y parsea.

console.log("Cantidad de LocalStorages almacenados " + localStorage.length);

function storage() {

    let detectedJSON = JSON.stringify(newMalwareArray);
    localStorage.setItem("detectedStorage", detectedJSON);

    return JSON.parse(localStorage.getItem("detectedStorage"));
};

let parseStorage = JSON.parse(localStorage.getItem("detectedStorage"));

// --------------- QUARANTINE SUCCESS MESSAGE ---------------

// La ejecucion de esta funcion genera un mensaje satisfactorio que sera utilizado en la seccion de Cuarentena.

function successMessage() {
    $("#imgStatus").attr("src", "img/success.svg");
    $("#QuarantineTitle").html("Good job! Your system is free of malwares");
};

// --------------- QUARANTINE WARNING MESSAGE ---------------

// La ejecucion de esta funcion genera un mensaje de alerta que sera utilizado en la seccion de Cuarentena.

function warningMessage() {
    $("#imgStatus").attr("src", "img/warning.svg");
    $("#QuarantineTitle").html("Your system is in danger! Remove the malwares");
};

// --------------- QUARANTINE HEADER ---------------

// El mensaje mostrado va a depender de si se cumple o no la condicion de esta estructura. La primera condicion es verificar si el localStorage "detectedStorage" se encuentra o no almacenado. En caso de que si se encuentre almacenado, se verificara si el mismo tiene objetos o si esta vacio.

if (parseStorage == null) {
    successMessage();
} else if (parseStorage.length >= 0) {
    if (parseStorage.length == 0) {
        successMessage();
    } else {
        warningMessage();
    }
};

// --------------- BUCLE DOM ---------------

// Se define una funcion que contiene un bucle que permitira recorrer un array de objetos y manipular el DOM en la seccion Cuarentena. Se generara una tabla de forma dinamica cuyo contenido son los valores de las propiedades de los objetos del array recorrido. Se genera tambien un boton por cada objeto.

function bucle(var1) {

    let i = 0;

    for (let malware of var1) {

        let tbody = document.getElementById("tbody");

        let rows = document.createElement("tr");
        rows.setAttribute("id", `tr${i}`);

        rows.innerHTML = `
        <td><button class="btn btn-danger" id="removeButton${i}">Delete</button> ${malware.name}</td>
        <td>${malware.type}</td>
        <td>${malware.risk}</td>
        <td>${malware.location}</td>
        `

        i++

        tbody.appendChild(rows);
    };
};

// --------------- LOCAL STORAGE & DOM ---------------

// En caso de que el localStorage "detectedStorage" se encuentre almacenado, el bucle definido previamente lo va a recorrer para modificar el DOM al ejecutar el programa.

if (localStorage.length > 0) {
    bucle(parseStorage);
};

// --------------- CLEAR TABLE & STORAGE ---------------

// Se define una funcion cuya ejecucion modifica el DOM en la seccion Cuarentena (tabla y mensaje) y elimina los items almacenados en el localStorage.

const clear = function clear() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    localStorage.clear();
    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

    successMessage();
};

// --------------- DELETE FUNCTION ---------------

// Se define una funcion que a traves de un bucle se asignan identificadores unicos a los objetos de un array generado por un evento ejecutado.
// Adquiero el array parseado generado por el evento ejecutado.
// La estructura if se utiliza porque si no existe el arrayEvent, la consola tira error.
// Asigno identificadores con un bucle a los objetos del arrayEvent. 
// Verifico con console.log que los identificadores hayan sido asignados correctamente.

function malwareDelete() {

    let arrayEvent = JSON.parse(localStorage.getItem("detectedStorage"));

    let i = 0;

    if (arrayEvent != null) {

        for (let malware of arrayEvent) {

            malware.ID = i;

            i++
        };

        console.log(arrayEvent);

    };

    // Defino una funcion que si arrayEvent existe, con el uso de un bucle se va a declarar un evento a cada boton de la tabla de Cuarentena, que permitira eliminar los objetos del arrayEvent tanto del DOM como del storage.
    // La estructura if la utilizo porque si no existe arrayEvent, la consola tira error.
    // Se declara evento click en los botones. 
    // Eliminacion en el DOM: Se borra la fila correspondiente al boton clickeado en la tabla generada.
    // Eliminacion en el storage "detectedStorage":
    // Con el metodo find() se busca aquel objeto cuya propiedad ID tenga como valor i.
    // Con el metodo indexOf() conocemos el indice de ese objeto encontrado.
    // Con el metodo splice() eliminamos el objeto.
    // Se actualiza el storage "detectedStorage" con la nueva composicion de arrayEvent.


    function deleteButton() {

        if (arrayEvent != null) {

            for (let i = 0; i < arrayEvent.length; i++) {

                $(`#removeButton${i}`).on("click", () => {

                    // Eliminacion en DOM

                    $(`#tr${i}`).html("");

                    // Eliminacion en Array

                    let find = arrayEvent.find(x => x.ID == i);
                    let index = arrayEvent.indexOf(find);

                    arrayEvent.splice(index, 1);

                    // Verifico eliminacion

                    console.log(arrayEvent);

                    // Actualizo el storage "detectedStorage"

                    arrayEventJSON = JSON.stringify(arrayEvent);
                    localStorage.setItem("detectedStorage", arrayEventJSON);
                });
            };
        };

    };

    // Cuando llame a la funcion padre malwareDelete(), se ejecutara la funcion hijo deleteButton().

    deleteButton();
}

// --------------- SCAN RESULT MODAL ---------------

// Se definen funciones que al llamarlas ejecutaran un modal con un mensaje en especifico.

function noThreatsModal() {
    setTimeout(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor: '#ffffff',
            title: 'Your system is safe',
            color: '#ffffff',
            toast: true,
            background: '#a5dc86',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 4000,
        });
    });
};

function threatsModal() {
    setTimeout(() => {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            iconColor: '#ffffff',
            title: 'Threats were detected',
            color: '#ffffff',
            toast: true,
            background: '#f27474',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 6000,
            footer: 'Remove the detected malwares in the Quarantine section'
        });
    });
};

// --------------- SIMULACION QUICK SCAN ---------------

// Se define una funcion con un parametro a definir, que contiene el proceso de la herramienta Quick Scan.
// Con clear() se eliminan los items eventualmente almacenados en el localStorage, y se resetea el contenido del newMalwareArray a 0.
// Hacemos uso de la funcion random().
// Se define una probabilidad media a que la herramienta Quick Scan encuentre un malware.
// En caso de no encontrar se ejecutan funciones con mensajes satisfactorios.
// En caso de encontrar, se ejecutan funciones con mensajes de alerta.
// En caso de encontrar, se define un bucle que obtiene de forma aleatoria objetos del array original malwareArray. Se obtienen de forma aleatoria porque el indice es aleatorio con la funcion random(). Cada objeto obtenido aleatoriamente es pusheado dentro del newMalwareArray, hasta que su extension sea limitada por el parametro a definir.
// Se ejecuta la funcion bucle() con el storage "detectedStorage" parseado como parametro.


const simulacionQs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 4) {
        noThreatsModal();
        successMessage();
    } else {
        threatsModal();
        warningMessage();
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());
};

// --------------- SIMULACION FULL SCAN & CUSTOM SCAN ---------------

// Se define una funcion con un parametro a definir, que contiene el proceso de las herramientas Full Scan y Custom Scan
// Con clear() se eliminan los items eventualmente almacenados en el localStorage, y se resetea el contenido del newMalwareArray a 0.
// Hacemos uso de la funcion random().
// Se define una probabilidad muy alta a que las herramientas Full Scan y Custom Scan encuentren un malware.
// En caso de no encontrar se ejecutan funciones con mensajes satisfactorios.
// En caso de encontrar, se ejecutan funciones con mensajes de alerta.
// En caso de encontrar, se define un bucle que obtiene de forma aleatoria objetos del array original malwareArray. Se obtienen de forma aleatoria porque el indice es aleatorio con la funcion random(). Cada objeto obtenido aleatoriamente es pusheado dentro del newMalwareArray, hasta que su extension sea limitada por el parametro a definir.
// Se ejecuta la funcion bucle() con el storage "detectedStorage" parseado como parametro.

const simulacionFsCs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 1) {
        noThreatsModal();
        successMessage();
    } else {
        threatsModal();
        warningMessage();
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());
};


// --------------- EVENTO QUICK SCAN ---------------

// Se define un evento al clickear el boton Quick Scan
// Se desarrolla una funcion aleatoria que se usara para definir, aleatoriamente, la extension del newMalwareArray.
// Se llama a la funcion generadora del proceso y con la definicion de su parametro, el bucle Do...while va a correr y pushear objetos hasta que newMalwareArray.length sea limitado por el numero dado por malwareQs.
// Se llama a la funcion malwareDelete() para que se habilite la eliminacion de objetos.

let qsButton = document.getElementById("qsButton");

qsButton.addEventListener("click", () => {

    let malwareQs = Math.floor(Math.random() * 3) + 1;

    simulacionQs(malwareQs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

    malwareDelete();

});

// --------------- EVENTO FULL SCAN ---------------

// Se define un evento al clickear el boton Full Scan
// Se desarrolla una funcion aleatoria que se usara para definir, aleatoriamente, la extension del newMalwareArray.
// Se llama a la funcion generadora del proceso y con la definicion de su parametro, el bucle Do...while va a correr y pushear objetos hasta que newMalwareArray.length sea limitado por el numero dado por malwareFsCs.
// Se llama a la funcion malwareDelete() para que se habilite la eliminacion de objetos.


let fsButton = document.getElementById("fsButton");

fsButton.addEventListener("click", () => {

    let malwareFsCs = Math.floor(Math.random() * 6) + 1;

    simulacionFsCs(malwareFsCs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

    malwareDelete();

});

// --------------- EVENTO CUSTOM SCAN ---------------

// Se define un evento al clickear el boton Custom Scan
// Se ejecuta un modal
// Una vez confirmado el modal, se desarrolla una funcion aleatoria que se usara para definir, aleatoriamente, la extension del newMalwareArray.
// Se llama a la funcion generadora del proceso y con la definicion de su parametro, el bucle Do...while va a correr y pushear objetos hasta que newMalwareArray.length sea limitado por el numero dado por malwareFsCs.
// Se llama a la funcion malwareDelete() para que se habilite la eliminacion de objetos.

let csButton = document.getElementById("csButton");

csButton.addEventListener("click", () => {

    Swal.fire({
        icon: 'question',
        title: 'Choose where to run the scan',
        input: 'select',
        inputOptions: {
            C: 'Local Disk (C:)',
            D: 'Local Disk (D:)',
        },
        footer: 'To scan the entire system run a Full Scan',
        confirmButtonText: 'Scan',
        confirmButtonColor: '#198754'
    }).then((result) => {
        if (result.isConfirmed) {

            let malwareFsCs = Math.round(Math.random() * 5) + 1;

            simulacionFsCs(malwareFsCs);

            console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

            malwareDelete();
        };
    });

});

// --------------- DELETE FUNCTION - LOAD ---------------

// Se llama a la funcion para que se habilite la eliminacion de objetos sin la necesidad de ejecutar los eventos de QS, FS y CS.

malwareDelete();

// --------------- REMOVE ALL BUTTON ---------------

// Se declara un evento click que llama a la funcion clear().

deleteAllButton.addEventListener("click", clear);

// --------------- DYNAMIC INTERFACE ---------------

// Se declara evento que al clickear el boton Cuarentena, se esconda la seccion Estado y aparezca la seccion Cuarentena.
// Se declara evento que al clickear el boton Estado, se esconda la seccion Cuarentena y aparezca la seccion Estado.

let idStatus = document.getElementById("idStatus");
let idQuarantine = document.getElementById("idQuarantine");

idQuarantine.addEventListener("click", () => {

    $("#statusCont").hide();
    $("#quarantineCont").fadeIn(400);

    idQuarantine.classList.add("active");
    idStatus.classList.remove("active");

});

idStatus.addEventListener("click", () => {

    $("#quarantineCont").hide();
    $("#statusCont").fadeIn(400);

    idStatus.classList.add("active");
    idQuarantine.classList.remove("active");
});

// --------------- UPDATE BUTTON ---------------

// Se declara evento click que ejecuta una animacion en el boton de Update.
// Cuando termina la animacion se ejecuta un modal con un mensaje satisfactorio.

let upButton = document.getElementById("upButton");
let layer = document.getElementById("layer");
let spin = document.getElementById("spin");

upButton.addEventListener("click", () => {

    $("#uTitle").html("Updating...");

    layer.classList.add("overlay");

    spin.classList.add("spin");

    setTimeout(() => {
        Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Databases are up to date`,
                allowOutsideClick: false,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 2200,
            },

            $("#uTitle").html("Updated!"));
    }, 20000);
});

// --------------- POWER & CARD ---------------

// Se declara evento click que ejecuta un modal de confirmacion.
// Si se confirma el modal, se manipula el DOM.

$("#power").on("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your system will be unprotected.",
        icon: 'warning',
        iconColor: '#dc3545',
        background: 'white',
        toast: true,
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#198754',
        confirmButtonText: 'Turn Off',
    }).then((result) => {
        if (result.isConfirmed) {

            $("body").prepend(`
            <div class="row off">
                <div class="tarjeta col-xl-3 mx-auto my-auto py-5 d-flex justify-content-around">
                    <img src="img/perfil.png" alt="Rodrigo Manica" width="100px" height="100px">
                    <div class="info">
                        <h2 class="nombre mx-auto pt-2">Rodrigo Manica</h2>
                        <h5 class="profesion mx-auto">Front End Developer</h5>

                        <div class="d-flex justify-content-start">
                            <a href="https://www.linkedin.com/in/rodrigomanica/" target="_blank" class="mt-2"><img src="img/linkedin.svg" alt="LinkedIn" height="30px" width="30px"></a>
                            <a href="https://github.com/rodrigomanica5" target="_blank" class="mx-2 mt-2"><img src="img/github.svg" alt="GitHub" height="30px" width="30px"></a>
                        </div>
                    </div>
                </div>
            </div>`);
        };
    });
});

// --------------- AJAX ---------------

// Hacemos un llamado AJAX para obtener la direccion de IP del usuario.
// En caso de que la respuesta al llamado sea exitosa, se ejecuta un modal.

const ipify = `https://api.ipify.org?format=json`;

$(() => {

    $.get(ipify, (respuesta, estado) => {

        if (estado == "success") {

            console.log(respuesta);

            Swal.fire({
                position: 'center',
                icon: 'success',
                text: `Your IP Address has been verified by Breezy Antivirus!`,
                title: respuesta.ip,
                showConfirmButton: false,
                allowOutsideClick: false,
                timerProgressBar: true,
                timer: 2300,
            });
        };
    });
});