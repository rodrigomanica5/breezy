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

malwareArray.push(new Malware("Worm", "I-Worm/Mydoom.K", "Critical", "C:\Windows\System32\catroot2\mydoom.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Fakealert.365", "Low", "C:\Windows\System32\catroot2\sdkey.exe"));
malwareArray.push(new Malware("Worm", "Net-Worm.Win32.Koobface.b", "Medium", "C:\Windows\System32\catroot2\koobface.exe"));
malwareArray.push(new Malware("Adware", "Adware.Win32.Look2me.ab", "High", "C:\Windows\System32\Boot\look2me.exe"));
malwareArray.push(new Malware("Trojan", "Trojan IRC/Backdor.SdBot4.FRV", "Medium", "C:\Windows\SysWOW64\sdbot.exe"));
malwareArray.push(new Malware("Ransomware", "CryptoLocker", "Critical", "C:\Windows\SysWOW64\cryptolocker.exe"));
malwareArray.push(new Malware("Ransomware", "WannaCry", "Critical", "C:\Windows\debug\wannacry.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Qoologic - Key Logger", "High", "C:\Windows\debug\qoologic.exe"));
malwareArray.push(new Malware("Spyware", "Win32/Hoax.Renos.HX", "Low", "C:\Windows\System32\Boot\hoax.exe"));

console.log(malwareArray);

let newMalwareArray = [];

// --------------- OBJETOS SCAN-TYPE ---------------

// class ScanType {
//     constructor(var1, var2) {
//         this.type = var1;
//         this.rate = var2;
//     }
// }

// const qs = new ScanType("Quick Scan", 0.03);
// const fs = new ScanType("Full Scan", 0.2);
// const cs = new ScanType("Custom Scan", 0.13);

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

// --------------- BUCLE DOM ---------------

function bucle(var1) {

    let i = 0;

    for (let malware of var1) {

        let tbody = document.getElementById("tbody");

        let rows = document.createElement("tr");
        rows.innerHTML = `
        <td><div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="checkbox${i}">
            <label class="form-check-label" for="checkbox${i}">${malware.name}</label>
        </div></td>
        <td>${malware.type}</td>
        <td>${malware.risk}</td>
        <td>${malware.location}</td>
        `

        tbody.appendChild(rows);

        i++
    };
}

// --------------- LOCAL STORAGE & DOM ---------------

if (localStorage.length > 0) {

    bucle(JSON.parse(localStorage.getItem("detectedStorage")))
};

// --------------- CLEAR TABLE & STORAGE ---------------

const clear = function clear() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "",

        localStorage.clear();
    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);
};

// --------------- SIMULACION QUICK SCAN ---------------

const simulacionQs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 4) {
        alert("No se encontraron Malwares en su sistema");
    } else {
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());
};

// --------------- SIMULACION FULL SCAN & CUSTOM SCAN ---------------
const simulacionFsCs = (var1) => {

    clear();
    newMalwareArray = [];

    if (random() <= 1) {
        alert("No se encontraron Malwares en su sistema");
    } else {
        do {
            let detected = malwareArray[random()];
            newMalwareArray.push(detected);
        } while (newMalwareArray.length < var1);
    }

    bucle(storage());
}

// --------------- EVENTO QUICK SCAN ---------------

let qsButton = document.getElementById("qsButton");

qsButton.addEventListener("click", () => {
    let malwareQs = Math.floor(Math.random() * 4) + 1;

    simulacionQs(malwareQs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);
});

// --------------- EVENTO FULL SCAN ---------------

let fsButton = document.getElementById("fsButton");

fsButton.addEventListener("click", () => {
    let malwareFsCs = Math.floor(Math.random() * 7) + 1;

    simulacionFsCs(malwareFsCs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);
});

// --------------- EVENTO CUSTOM SCAN ---------------

let csButton = document.getElementById("csButton");

csButton.addEventListener("click", () => {
    let malwareFsCs = Math.round(Math.random() * 7) + 1;

    simulacionFsCs(malwareFsCs);

    console.log("Cantidad de LocalStorages almacenados: " + localStorage.length);
});

// --------------- SPA ---------------

let statusC = document.getElementById("statusCont");
let quarantineC = document.getElementById("quarantineCont");

let idStatus = document.getElementById("idStatus");
let idQuarantine = document.getElementById("idQuarantine");


idQuarantine.addEventListener("click", () => {
    quarantineC.classList.remove("hidden");

    statusC.classList.remove("show");
    statusC.classList.add("hidden");

    idQuarantine.classList.add("active");
    idStatus.classList.remove("active");
});

idStatus.addEventListener("click", () => {
    quarantineC.classList.add("hidden");

    statusC.classList.add("show");
    statusC.classList.remove("hidden");

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
    layer.classList.add("overlay");

    spin.classList.add("spin");
});