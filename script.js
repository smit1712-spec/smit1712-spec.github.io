/* =========================================================
   SMIT // SEC-OS
   BOOT SEQUENCE ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const progress = document.getElementById("progress");
    const progressText = document.getElementById("progress-text");
    const bootLog = document.getElementById("boot-log");

    const accessMessage = document.getElementById("access-message");
    const enterSystem = document.getElementById("enter-system");
    const bootScreen = document.getElementById("boot-screen");


    /* =====================================================
       SECURITY BOOT LOG
    ===================================================== */

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


    /* =====================================================
       VARIABLES
    ===================================================== */

    let percentage = 0;
    let messageIndex = 0;


    /* =====================================================
       START BOOT
    ===================================================== */

    const bootTimer = setInterval(() => {

        percentage += Math.floor(Math.random() * 4) + 1;

        if (percentage >= 100) {
            percentage = 100;
        }


        /* Update progress bar */

        progress.style.width = percentage + "%";


        /* Update percentage text */

        progressText.textContent = percentage + "%";


        /* Add terminal messages */

        const nextMessage =
            Math.floor((percentage / 100) * bootMessages.length);

        if (
            nextMessage > messageIndex &&
            messageIndex < bootMessages.length
        ) {

            addBootMessage(
                bootMessages[messageIndex]
            );

            messageIndex++;
        }


        /* Finish */

        if (percentage >= 100) {

            clearInterval(bootTimer);

            finishBoot();
        }

    }, 100);


    /* =====================================================
       ADD BOOT MESSAGE
    ===================================================== */

    function addBootMessage(message) {

        const line = document.createElement("div");

        line.innerHTML = `
            <span>›</span>
            ${message}
        `;

        bootLog.appendChild(line);


        /* Keep only latest messages */

        while (bootLog.children.length > 6) {

            bootLog.removeChild(
                bootLog.firstElementChild
            );
        }
    }


    /* =====================================================
       FINISH BOOT
    ===================================================== */

    function finishBoot() {

        addBootMessage(
            "ACCESS CONTROL: VERIFIED"
        );


        /* Show ACCESS GRANTED */

        setTimeout(() => {

            accessMessage.classList.add("show");

        }, 500);


        /* Show ENTER SYSTEM */

        setTimeout(() => {

            enterSystem.classList.add("show");

        }, 1100);
    }


    /* =====================================================
       ENTER SYSTEM
    ===================================================== */

    enterSystem.addEventListener("click", () => {

        enterSystem.style.pointerEvents = "none";

        bootScreen.classList.add("exit");

    });


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%cSMIT // SEC-OS",
        "color:#00ff88;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cSecurity operating environment initialized.",
        "color:#00e5ff;"
    );

});
