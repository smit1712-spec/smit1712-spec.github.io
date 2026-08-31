/* =========================================================
   SMIT // SEC-OS
   BOOT SYSTEM
========================================================= */

const progress = document.getElementById("progress");
const progressText = document.getElementById("progress-text");

const bootLog = document.getElementById("boot-log");

const accessMessage = document.getElementById("access-message");
const enterSystem = document.getElementById("enter-system");

const bootScreen = document.getElementById("boot-screen");


/* =========================================================
   BOOT LOG MESSAGES
========================================================= */

const bootMessages = [
    "Initializing security kernel...",
    "Loading identity module...",
    "Loading threat monitoring system...",
    "Establishing encrypted environment...",
    "Loading operations database...",
    "Verifying security credentials...",
    "Initializing command center...",
    "Secure channel established."
];


/* =========================================================
   BOOT SEQUENCE
========================================================= */

let currentProgress = 0;

let messageIndex = 0;

const bootInterval = setInterval(() => {

    currentProgress += Math.floor(Math.random() * 5) + 2;

    if (currentProgress >= 100) {

        currentProgress = 100;

        clearInterval(bootInterval);

        progress.style.width = "100%";

        progressText.textContent = "100%";

        finishBoot();

        return;
    }

    progress.style.width = currentProgress + "%";

    progressText.textContent = currentProgress + "%";

    updateBootLog();

}, 120);


/* =========================================================
   UPDATE TERMINAL LOG
========================================================= */

function updateBootLog() {

    if (
        currentProgress > 10 &&
        currentProgress % 10 < 5 &&
        messageIndex < bootMessages.length
    ) {

        const line = document.createElement("div");

        line.innerHTML =
            `<span>›</span>${bootMessages[messageIndex]}`;

        bootLog.appendChild(line);

        messageIndex++;

        /* Keep terminal clean */

        if (bootLog.children.length > 6) {

            bootLog.removeChild(
                bootLog.firstElementChild
            );
        }
    }
}


/* =========================================================
   FINISH BOOT
========================================================= */

function finishBoot() {

    /* Final log */

    const line = document.createElement("div");

    line.innerHTML =
        `<span>›</span>ACCESS CONTROL: VERIFIED`;

    bootLog.appendChild(line);


    /* Show access message */

    setTimeout(() => {

        accessMessage.classList.add("show");

    }, 400);


    /* Show enter button */

    setTimeout(() => {

        enterSystem.classList.add("show");

    }, 900);
}


/* =========================================================
   ENTER SYSTEM
========================================================= */

enterSystem.addEventListener("click", () => {

    enterSystem.style.pointerEvents = "none";

    bootScreen.classList.add("exit");

});


/* =========================================================
   SYSTEM CONSOLE
========================================================= */

console.log(
    "%cSMIT // SEC-OS",
    "color:#00ff88;font-size:20px;font-weight:bold;"
);

console.log(
    "%cSecurity environment initialized.",
    "color:#00e5ff;"
);
