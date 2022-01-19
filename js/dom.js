// --------------- HEADER ---------------


let topBar = document.getElementById("header");
topBar.innerHTML = `
<div class="topBar col-xl-12 d-flex align-items-center justify-content-end">
    <div class="language">
        <img src="/img/english.png" alt="English" width="18px" height="18px" class="dropdown-toggle" id="dropdownMenuDark" data-bs-toggle="dropdown" aria-expanded="false">

        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuDark">
            <li class="languageOption dropdown-item"><img src="/img/english.png" alt="English" width="18px" height="18px"> English</li>
            <li class="languageOption dropdown-item"><img src="/img/spanish.png" alt="Spanish" width="18px" height="18px"> Spanish</li>
        </ul>
    </div>
    <h6>Breezy Antivirus 2.1.2</h6>
</div>
`;

// --------------- SIDENAV ---------------

let nav = document.getElementById("nav");
nav.innerHTML = `
<div class="tool col-xl-12 text-center py-4">
    <img src="img/status.svg" width="60px" height="60px" alt="" class="menuIcon mb-3">
    <h6 id="statusTool">Status</h6>
</div>

<div class="tool col-xl-12 text-center py-4">
    <img src="img/quarantine.svg" width="60px" height="60px" alt="" class="menuIcon mb-3">
    <h6 id="quarantineTool">Quarantine</h6>
</div>

<div class="toolPro col-xl-12 text-center py-4">
    <span class="badge bg-primary rounded-pill col-xl-3 offset-xl-8">PRO</span>
    <img src="img/privacy.svg" width="60px" height="60px" alt="" class="mb-3">
    <h6 id="privacyTool">Privacy</h6>
</div>

<div class="toolPro col-xl-12 text-center py-4">
    <span class="badge bg-primary rounded-pill col-xl-3 offset-xl-8">PRO</span>
    <img src="img/performance.svg" width="60px" height="60px" alt="" class="mb-3">
    <h6 id="performanceTool">Performance</h6>
</div>

<div class="power col-xl-12 text-center">
    <img src="img/power.png" alt="Turn Off" width="60px" height="60px" class="mt-3">
</div>
`;

function statusTool() {

    let statusCont = document.getElementById("statusCont");
    statusCont.innerHTML = `
    <div class="scanning row col-xl-11 justify-content-between mx-auto" id="part1"></div>

    <div class="row col-xl-11 mt-2 justify-content-between mx-auto" id="part2"></div>

    <article class="pro row col-xl-11 mx-auto mt-5" id="part3"></article>

    <article class="proServices row col-xl-11 justify-content-between mx-auto mt-2" id="part4"></article>

    <article class="col-xl-12 mt-4" id="part5"></article>
    `;

    // --------------- PART1 STATUS ---------------

    let part1 = document.getElementById("part1");
    part1.innerHTML = `
    <div class="scanButton col-xl-auto d-flex flex-column justify-content-evenly align-items-center">
        <img src="img/qs.svg" width="90px" height="90px" alt="" class="scanIcon">
        <h4 id="qsTitle">Quick Scan</h4>
        <p class="col-xl-6 text-center" id="qsDescription">Scan the most vulnerable areas of your device</p>
    </div>

    <div class="scanButton col-xl-auto d-flex flex-column justify-content-evenly align-items-center">
        <img src="img/fs.svg" width="90px" height="90px" alt="" class="scanIcon">
        <h4 id="fsTitle">Full Scan</h4>
        <p class="col-xl-6 text-center" id="fsDescription">Scan your entire system for viruses</p>
    </div>

    <div class="scanButton col-xl-auto d-flex flex-column justify-content-evenly align-items-center">
        <img src="img/cs.svg" width="90px" height="90px" alt="" class="scanIcon">
        <h4 id="csTitle">Custom Scan</h4>
        <p class="col-xl-6 text-center" id="csDescription">Choose the areas of your device you prefer to scan</p>
    </div>
    `;

    // --------------- PART2 STATUS ---------------

    let part2 = document.getElementById("part2");
    part2.innerHTML = `
    <div class="webProtection col-xl-8">
        <h4 class="pr-5 pt-3" id="wpTitle">Web Protection</h4>
        <div class="browsers row col-xl-10 justify-content-around mx-auto pt-2">
            <div class="form-check form-switch col-xl-2">
                <input class="form-check-input" type="checkbox" id="formSwitchCheckChecked1" checked="">
                <label class="form-check-label browserOption" for="formSwitchCheckChecked1">Chrome</label>
            </div>

            <div class="form-check form-switch col-xl-2">
                <input class="form-check-input" type="checkbox" id="formSwitchCheckChecked2" checked="">
                <label class="form-check-label browserOption" for="formSwitchCheckChecked2">Firefox</label>
            </div>

            <div class="form-check form-switch col-xl-2">
                <input class="form-check-input custom-control" type="checkbox" id="formSwitchCheckChecked3" checked="">
                <label class="form-check-label browserOption" for="formSwitchCheckChecked3">Edge</label>
            </div>
        </div>
    </div>

    <div class="update col-xl-4 d-flex flex-column align-items-center justify-content-evenly bg-danger" id="upButton">
        <img src="img/update.svg" alt="" width="40px" height="40px">
        <h4 id="uTitle">Update</h4>
    </div>
    `;

    // --------------- PART3 STATUS ---------------

    let part3 = document.getElementById("part3");
    part3.innerHTML = `
    <div class="description col-xl-8 d-flex flex-column justify-content-between">
        <h3 id="proTitle">Maximize your protection with Breezy PRO</h3>
        <p id="proDescription">Includes Enhanced Firewall, Protection for all devices, Safe Money and Protection for kids.</p>
    </div>

    <div class="trialButton col-xl-4">
        <input type="submit" name="" id="trialButton" class="btn btn-success" value="FREE 30-day Trial">
        <a href="" id="callToAction">Buy Now</a>
    </div>
    `;

    // --------------- PART4 STATUS ---------------

    let part4 = document.getElementById("part4");
    part4.innerHTML = `
    <div class="lockedService col-xl-3 d-flex flex-column align-items-center">
        <span class="badge bg-primary rounded-pill col-xl-2 offset-xl-10 mt-2">PRO</span>
        <img src="" alt="">
        <h4 id="ls1">Enhanced Firewall</h4>
    </div>

    <div class="lockedService col-xl-3 text-center">
        <span class="badge bg-primary rounded-pill col-xl-2 offset-xl-10 mt-2">PRO</span>
        <img src="" alt="">
        <h4 id="ls2">Protection for all devices</h4>
    </div>

    <div class="lockedService col-xl-3 text-center">
        <span class="badge bg-primary rounded-pill col-xl-2 offset-xl-10 mt-2">PRO</span>
        <img src="" alt="">
        <h4 id="ls3">Safe Money</h4>
    </div>

    <div class="lockedService col-xl-3 text-center">
        <span class="badge bg-primary rounded-pill col-xl-2 offset-xl-10 mt-2">PRO</span>
        <img src="" alt="">
        <h4 id="ls4">Protection for kids</h4>
    </div>
    `;

    // --------------- PART5 STATUS ---------------

    let part5 = document.getElementById("part5");
    part5.innerHTML = `
    <p class="creditos my-0 pt-2">© 2021 - 2022 Powered by Rodrigo Manica. All rights reserved.</p>
    `;
};

function quarantineTool() {

    // --------------- PART6 QUARANTINE ---------------

    let main = document.getElementById("main");
    let eliminar = main.removeChild(statusCont);

    let quarantineCont = document.getElementById("quarantineCont");
    quarantineCont.innerHTML = `
    <div class="detectionList row col-xl-8 mx-auto">
        <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th class="t1" scope="col">Name</th>
                    <th class="t2" scope="col">Type</th>
                    <th class="t3" scope="col">Risk</th>
                    <th class="t4" scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus1">
                            <label class="form-check-label" for="virus1"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus2">
                            <label class="form-check-label" for="virus2"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus3">
                            <label class="form-check-label" for="virus3"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus4">
                            <label class="form-check-label" for="virus4"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus5">
                            <label class="form-check-label" for="virus5"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus6">
                            <label class="form-check-label" for="virus6"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus7">
                            <label class="form-check-label" for="virus7"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="virus8">
                            <label class="form-check-label" for="virus8"></label>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
};