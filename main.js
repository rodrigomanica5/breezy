// --------------- BACKGROUND

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 6,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1b1e34"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 160,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 40,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;

// --------------- OBJETOS MALWARE ---------------

class Malware {
    constructor(var1, var2, var3, var4) {
        this.type = var1;
        this.name = var2;
        this.danger = var3;
        this.location = var4;
    }

    malwareMessage() {
        return alert("##################################################### ----------------------------- SEE YOU SOON ---------------------------- ##################################################### // by HajKtuZ");
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
            alert("El tiempo estimado del análisis es de " + (menu3() * qs.rate) + " minutos.");
            if (random() <= 4) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionQs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    malwareArray[random()].malwareMessage();
                } else {
                    alert("No hay problema, aislaremos el archivo infectado en cuarentena");
                }
            }
            break;
        } else if (menu2 == 2) {
            alert("Haz elegido correr un " + fs.type + " en tu equipo.");
            alert("El tiempo estimado del análisis es de " + (menu3() * fs.rate) + " minutos.");
            if (random() <= 1) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionFsCs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    malwareArray[random()].malwareMessage();
                } else {
                    alert("No hay problema, aislaremos el archivo infectado en cuarentena");
                }
            }
            break;
        } else if (menu2 == 3) {
            alert("Haz elegido correr un " + cs.type + " en tu equipo.");
            alert("El tiempo estimado del análisis es de " + (menu3() * cs.rate) + " minutos.");
            if (random() <= 1) {
                alert("Su equipo se encuentra limpio de Malwares");
            } else {
                simulacionFsCs();
                alert("Se han detectado " + newMalwareArray.length + " Malware/s: " + newMalwareArray.join(" || "));
                let choice = prompt("¿Deseas eliminar los archivos infectados de tu sistema? SI / NO").toUpperCase();
                if (choice == "SI") {
                    malwareArray[random()].malwareMessage();
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

document.main