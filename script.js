/* =========================================================
   SMIT // SEC-OS
   COMMAND CENTER ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bootScreen =
        document.getElementById("boot-screen");

    const progress =
        document.getElementById("progress");

    const progressText =
        document.getElementById("progress-text");

    const bootLog =
        document.getElementById("boot-log");

    const accessMessage =
        document.getElementById("access-message");

    const enterSystem =
        document.getElementById("enter-system");

    const clock =
        document.getElementById("clock");

    const securityFeed =
        document.getElementById("security-feed");

    const navItems =
        document.querySelectorAll(".nav-item");


    /* =====================================================
       BOOT SEQUENCE
    ===================================================== */

    const bootMessages = [

        "Initializing security kernel...",

        "Loading identity module...",

        "Establishing encrypted environment...",

        "Loading operations database...",

        "Verifying security credentials...",

        "Initializing command center...",

        "Secure channel established."

    ];


    let percentage = 0;

    let messageIndex = 0;


    const bootTimer = setInterval(() => {

        percentage +=
            Math.floor(Math.random() * 4) + 1;


        if (percentage >= 100) {

            percentage = 100;

        }


        progress.style.width =
            percentage + "%";


        progressText.textContent =
            percentage + "%";


        const nextMessage =
            Math.floor(
                percentage /
                100 *
                bootMessages.length
            );


        if (
            nextMessage > messageIndex &&
            messageIndex < bootMessages.length
        ) {

            addBootMessage(
                bootMessages[messageIndex]
            );

            messageIndex++;

        }


        if (percentage >= 100) {

            clearInterval(bootTimer);

            finishBoot();

        }

    }, 100);


    function addBootMessage(message) {

        const line =
            document.createElement("div");

        line.innerHTML =
            `<span>›</span>${message}`;

        bootLog.appendChild(line);


        while (
            bootLog.children.length > 7
        ) {

            bootLog.removeChild(
                bootLog.firstElementChild
            );

        }

    }


    function finishBoot() {

        addBootMessage(
            "ACCESS CONTROL: VERIFIED"
        );


        setTimeout(() => {

            accessMessage.classList.add("show");

        }, 400);


        setTimeout(() => {

            enterSystem.classList.add("show");

        }, 900);

    }


    /* =====================================================
       ENTER COMMAND CENTER
    ===================================================== */

    enterSystem.addEventListener(
        "click",
        () => {

            bootScreen.classList.add("exit");

            setTimeout(() => {

                bootScreen.style.display =
                    "none";

            }, 1100);

        }
    );


    /* =====================================================
       LIVE CLOCK
    ===================================================== */

    function updateClock() {

        const now = new Date();

        const hours =
            String(now.getHours())
                .padStart(2, "0");

        const minutes =
            String(now.getMinutes())
                .padStart(2, "0");

        const seconds =
            String(now.getSeconds())
                .padStart(2, "0");


        clock.textContent =
            `${hours}:${minutes}:${seconds}`;

    }


    updateClock();

    setInterval(
        updateClock,
        1000
    );


    /* =====================================================
       NAVIGATION
    ===================================================== */

    navItems.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                navItems.forEach(
                    nav =>
                        nav.classList.remove(
                            "active"
                        )
                );


                item.classList.add(
                    "active"
                );


                const target =
                    document.getElementById(
                        item.dataset.target
                    );


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    /* =====================================================
       LIVE SECURITY FEED
    ===================================================== */

    const feedMessages = [

        "Network node heartbeat received",

        "Security profile synchronized",

        "Operations module verified",

        "Secure interface channel active",

        "System telemetry updated",

        "Portfolio environment stable",

        "Identity verification successful",

        "Command center monitoring active"

    ];


    function addFeedMessage() {

        const message =
            feedMessages[
                Math.floor(
                    Math.random() *
                    feedMessages.length
                )
            ];


        const now = new Date();

        const time =
            `${String(now.getHours()).padStart(2, "0")}:` +
            `${String(now.getMinutes()).padStart(2, "0")}:` +
            `${String(now.getSeconds()).padStart(2, "0")}`;


        const item =
            document.createElement("div");

        item.className =
            "feed-item";


        item.innerHTML = `

            <time>
                ${time}
            </time>

            <span class="feed-dot"></span>

            <p>
                ${message}
            </p>

        `;


        securityFeed.prepend(item);


        while (
            securityFeed.children.length > 7
        ) {

            securityFeed.removeChild(
                securityFeed.lastElementChild
            );

        }

    }


    setInterval(
        addFeedMessage,
        3500
    );


    /* =====================================================
       CONSOLE IDENTITY
    ===================================================== */

    console.log(
        "%cSMIT // SEC-OS",
        "color:#00ff95;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%cSecurity Operations Environment initialized.",
        "color:#00d9ff;"
    );

});
