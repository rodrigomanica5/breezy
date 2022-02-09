// --------------- OBJETOS MALWARE ---------------

class Malware {
    constructor(var1, var2, var3, var4) {
        this.type = var1;
        this.name = var2;
        this.risk = var3;
        this.location = var4;
    }
}

// --------------- ARRAY MALWARE ---------------

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

let newMalwareArray = [];

// --------------- FUNCION MATH.RANDOM ---------------

function random() {
    return Math.floor(Math.random() * 9);
}

// --------------- LOCAL & SESSION STORAGE ---------------

console.log("Cantidad de LocalStorages almacenados " + localStorage.length);

function storage() {

    let detectedJSON = JSON.stringify(newMalwareArray);
    localStorage.setItem("detectedStorage", detectedJSON);

    return JSON.parse(localStorage.getItem("detectedStorage"));
}

let parseStorage = JSON.parse(localStorage.getItem("detectedStorage"));

// --------------- QUARANTINE SUCCESS MESSAGE ---------------

function successMessage() {
    $("#imgStatus").attr("src", "img/success.svg");
    $("#QuarantineTitle").html("Good job! Your system is free of malwares");
};

// --------------- QUARANTINE WARNING MESSAGE ---------------

function warningMessage() {
    $("#imgStatus").attr("src", "img/warning.svg");
    $("#QuarantineTitle").html("Your system is in danger! Remove the malwares");
};

// --------------- QUARANTINE HEADER ---------------

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

function bucle(var1) {

    let i = 0;

    for (let malware of var1) {

        let tbody = document.getElementById("tbody");

        let rows = document.createElement("tr");
        rows.setAttribute("id", `tr${i}`);

        malware["id"] = i;

        rows.innerHTML = `
        <td><button class="btn btn-danger" id="removeButton${i}">Delete</button> ${malware.name}</td>
        <td>${malware.type}</td>
        <td>${malware.risk}</td>
        <td>${malware.location}</td>
        `

        i++

        tbody.appendChild(rows);
    };
}

// --------------- LOCAL STORAGE & DOM ---------------

if (localStorage.length > 0) {
    bucle(parseStorage);
};

// --------------- CLEAR TABLE & STORAGE ---------------

const clear = function clear() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "",

        localStorage.clear();
    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

    successMessage();
};

// --------------- DELETE BUTTON ---------------

function deleteButton() {
    for (let i = 0; i < 8; i++) {
        $(`#removeButton${i}`).on("click", () => {
            $(`#tr${i}`).html("");
        });
    };
}

// --------------- SIMULACION QUICK SCAN ---------------

const simulacionQs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 4) {
        successMessage();
    } else {
        warningMessage();
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());

    deleteButton();
};

// --------------- SIMULACION FULL SCAN & CUSTOM SCAN ---------------

const simulacionFsCs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 1) {
        successMessage();
    } else {
        warningMessage();
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());

    deleteButton();
}


// --------------- EVENTO QUICK SCAN ---------------

let qsButton = document.getElementById("qsButton");

qsButton.addEventListener("click", () => {

    let malwareQs = Math.floor(Math.random() * 3) + 1;

    simulacionQs(malwareQs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

});

// --------------- EVENTO FULL SCAN ---------------

let fsButton = document.getElementById("fsButton");

fsButton.addEventListener("click", () => {
    let malwareFsCs = Math.floor(Math.random() * 6) + 1;

    simulacionFsCs(malwareFsCs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

});

// --------------- EVENTO CUSTOM SCAN ---------------

let csButton = document.getElementById("csButton");

csButton.addEventListener("click", () => {
    let malwareFsCs = Math.round(Math.random() * 6) + 1;

    simulacionFsCs(malwareFsCs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);

});

// --------------- EXP ---------------

// function eliminarCarrito(malwareId) {
//     const virus = parseStorage.find(x => x.id === malwareId);
//     const malwareIndex = parseStorage.indexOf(virus);

//     parseStorage.splice(malwareIndex, 1);
// }

// --------------- DELETE BUTTON - DOM ---------------

deleteButton();

// --------------- SPA ---------------

let statusC = document.getElementById("statusCont");
let quarantineC = document.getElementById("quarantineCont");

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
})

// --------------- REMOVE BUTTON ---------------

deleteAllButton.addEventListener("click", clear);

// --------------- UPDATE BUTTON ---------------

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
                showConfirmButton: false,
                timer: 2200,
            },

            $("#uTitle").html("Updated!"));
    }, 20000);
});

// --------------- POWER & CARD ---------------

$("#power").on("click", () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "Your system will be unprotected.",
        icon: 'warning',
        iconColor: '#dc3545',
        background: 'white',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#198754',
        confirmButtonText: 'Turn Off'
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
        }
    })
});

// console.log(parseStorage)

// parseStorage.splice(3, 1);

// console.log(parseStorage);

// --------------- AJAX ---------------

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
                timer: 2300,
            });
        }
    })
});