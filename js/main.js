// --------------- OBJETOS MALWARE ---------------

class Malware {
    constructor(var1, var2, var3, var4) {
        this.type = var1;
        this.name = var2;
        this.danger = var3;
        this.location = var4;
    }
}

// --------------- ARRAY MALWARE ---------------

const malwareArray = [];

malwareArray.push(new Malware("Worm", "I-Worm/Mydoom.K", 4, "C:\Windows\System32\catroot2\mydoom.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Fakealert.365", 1, "C:\Windows\System32\catroot2\sdkey.exe"));
malwareArray.push(new Malware("Worm", "Net-Worm.Win32.Koobface.b", 2, "C:\Windows\System32\catroot2\koobface.exe"));
malwareArray.push(new Malware("Adware", "Adware.Win32.Look2me.ab", 3, "C:\Windows\System32\Boot\look2me.exe"));
malwareArray.push(new Malware("Trojan", "Trojan IRC/Backdor.SdBot4.FRV", 2, "C:\Windows\SysWOW64\sdbot.exe"));
malwareArray.push(new Malware("Ransomware", "CryptoLocker", 4, "C:\Windows\SysWOW64\cryptolocker.exe"));
malwareArray.push(new Malware("Ransomware", "WannaCry", 4, "C:\Windows\debug\wannacry.exe"));
malwareArray.push(new Malware("Trojan", "Trojan.Qoologic - Key Logger", 3, "C:\Windows\debug\qoologic.exe"));
malwareArray.push(new Malware("Spyware", "Win32/Hoax.Renos.HX", 1, "C:\Windows\System32\Boot\hoax.exe"));

console.log(malwareArray);


// --------------- OBJETOS SCAN-TYPE ---------------

class ScanType {
    constructor(var1, var2, var3) {
        this.type = var1;
        this.rate = var2;
        this.effectiveness = var3;
    }
}

const qs = new ScanType("Quick Scan", 0.03, "65%");
const fs = new ScanType("Full Scan", 0.2, "98%");
const cs = new ScanType("Custom Scan", 0.13, "98%");

// --------------- FUNCION MATH.RANDOM ---------------

function random() {
    return Math.floor(Math.random() * 9);
}

// --------------- FUNCION MATH.RANDOM FULL SCAN & CUSTOM SCAN ---------------

function randomFsCs() {
    return Math.floor(Math.random() * 7) + 1;
}

// --------------- FUNCION MATH.RANDOM QUICK SCAN ---------------

function randomQs() {
    return Math.floor(Math.random() * 4) + 1;
}

// --------------- SIMULACIONES ---------------

let malwareQs = randomQs();
let malwareFsCs = randomFsCs();

const newMalwareArray = [];

function simulacionQs() {
    do {
        let detected = malwareArray[random()].name;
        newMalwareArray.push(detected);
    } while (newMalwareArray.length < malwareQs)
}

function simulacionFsCs() {
    do {
        let detected = malwareArray[random()].name;
        newMalwareArray.push(detected);
    } while (newMalwareArray.length < malwareFsCs)
}

// --------------- CONTENIDOS TOOLS ---------------

statusTool();
// quarantineTool();

// --------------- IDIOMA ALTERNATIVO ---------------

// spanish();

// --------------- FUNCION MENU3() ---------------

function menu3() {
    let menu3 = parseFloat(prompt("¿Cuántos Gigabytes de almacenamiento tiene ocupado tu equipo?"));
    return menu3;
}

// --------------- MENU INTERACTIVO ---------------

let loop = true;

let menu1 = prompt("Bienvenido usuario a Breezy Antivirus. ¿Quieres analizar tu equipo? SI / NO").toUpperCase();
if (menu1 == "SI") {
    do {
        let menu2 = parseInt(prompt("Elige el tipo de análisis: 1- " + qs.type + " 2- " + fs.type + " 3- " + cs.type + ". Para SALIR presionar 0"));
        if (menu2 == 1) {
            alert("Haz elegido correr un " + qs.type + " en tu equipo.");
            alert("El tiempo estimado del análisis es de " + parseInt(menu3() * qs.rate) + " minutos.");
            if (random() <= 4) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionQs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    alert("Los Malwares detectados han sido eliminados de su sistema");
                } else {
                    alert("No hay problema, aislaremos el archivo infectado en cuarentena");
                }
            }
            break;
        } else if (menu2 == 2) {
            alert("Haz elegido correr un " + fs.type + " en tu equipo.");
            alert("El tiempo estimado del análisis es de " + parseInt(menu3() * fs.rate) + " minutos.");
            if (random() <= 1) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionFsCs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    alert("Los Malwares detectados han sido eliminados de su sistema");
                } else {
                    alert("No hay problema, aislaremos el archivo infectado en cuarentena");
                }
            }
            break;
        } else if (menu2 == 3) {
            alert("Haz elegido correr un " + cs.type + " en tu equipo.");
            alert("El tiempo estimado del análisis es de " + parseInt(menu3() * cs.rate) + " minutos.");
            if (random() <= 1) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionFsCs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    alert("Los Malwares detectados han sido eliminados de su sistema");
                } else {
                    alert("No hay problema, aislaremos el archivo infectado en cuarentena");
                }
            }
            break;
        } else if (menu2 == 0) {
            alert("Hasta pronto");
            break;
        }
    } while (loop == true);
} else {
    alert("Hasta pronto");
}

// --------------- STORAGE DE MALWARES DETECTADOS ---------------

// localStorage.setItem("list", newMalwareArray.join(" || "));

// let detectedMalwares = localStorage.getItem("list");

// quarantineContent();