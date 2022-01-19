function spanish() {

    // --------------- SCAN TITLES ---------------

    let qsTitle = document.getElementById("qsTitle");
    qsTitle.innerText = "Análisis Rápido";

    let fsTitle = document.getElementById("fsTitle");
    fsTitle.innerText = "Análisis Completo";

    let csTitle = document.getElementById("csTitle");
    csTitle.innerText = "Análisis Personalizado";

    // --------------- SCAN DESCRIPTIONS ---------------

    let qsDescription = document.getElementById("qsDescription");
    qsDescription.innerText = "Analiza las áreas más vulnerables de tu dispositivo";

    let fsDescription = document.getElementById("fsDescription");
    fsDescription.innerText = "Analiza todo el sistema en busca de virus";

    let csDescription = document.getElementById("csDescription");
    csDescription.innerText = "Elige las áreas de tu dispositivo a analizar";

    // --------------- TOOL TITLES ---------------

    let statusTool = document.getElementById("statusTool");
    statusTool.innerText = "Estado";

    let quarantineTool = document.getElementById("quarantineTool");
    quarantineTool.innerText = "Cuarentena";

    let privacyTool = document.getElementById("privacyTool");
    privacyTool.innerText = "Privacidad";

    let performanceTool = document.getElementById("performanceTool");
    performanceTool.innerText = "Rendimiento";

    // --------------- WEB PROTECTION TITLE ---------------

    let wpTitle = document.getElementById("wpTitle");
    wpTitle.innerText = "Protección Web";

    // --------------- UPDATE ---------------

    let uTitle = document.getElementById("uTitle");
    uTitle.innerText = "Actualizar"

    // --------------- BREEZY PRO ---------------

    let proTitle = document.getElementById("proTitle");
    proTitle.innerText = "Maximiza tu protección con Breezy PRO";

    let proDescription = document.getElementById("proDescription");
    proDescription.innerText = "Incluye Firewall optimizado, Protección para todos los dispositivos, Safe Money y Control parental"

    let trialButton = document.getElementById("trialButton");
    trialButton.innerHTML = `
    <input type="submit" name="" id="trialButton" class="btn btn-success" value="30 días GRATIS">
    `;

    let callToAction = document.getElementById("callToAction");
    callToAction.innerText = "Comprar"

    // --------------- LOCKED SERVICES TITLES ---------------

    let ls1 = document.getElementById("ls1");
    ls1.innerText = "Firewall Optimizado";

    let ls2 = document.getElementById("ls2");
    ls2.innerText = "Protección de dispositivos";

    let ls4 = document.getElementById("ls4");
    ls4.innerText = "Control Parental";
}