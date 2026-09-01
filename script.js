/* =====================================================
   SMIT // SECURITY OPERATIONS
   JAVASCRIPT ENGINE
===================================================== */


/* =====================================================
   BOOT SEQUENCE
===================================================== */

const bootScreen = document.getElementById("boot-screen");
const progressFill = document.getElementById("progress-fill");
const progressNumber = document.getElementById("progress-number");
const bootLog = document.getElementById("boot-log");
const app = document.getElementById("app");


const bootMessages = [
    "Initializing kernel...",
    "Loading security modules...",
    "Mounting encrypted filesystem...",
    "Checking network interfaces...",
    "Loading vulnerability assessment module...",
    "Loading security operations module...",
    "Verifying identity...",
    "Establishing secure connection...",
    "Security profile loaded.",
    "ACCESS GRANTED"
];


let progress = 0;
let messageIndex = 0;


function bootSequence() {

    const interval = setInterval(() => {

        progress += Math.floor(Math.random() * 4) + 1;

        if (progress >= 100) {

            progress = 100;

            clearInterval(interval);

            progressFill.style.width = "100%";
            progressNumber.textContent = "100%";

            bootLog.textContent = "> ACCESS GRANTED";

            setTimeout(() => {

                bootScreen.classList.add("hidden");

                app.classList.add("visible");

                document.body.style.overflow = "auto";

            }, 900);

            return;
        }


        progressFill.style.width = progress + "%";

        progressNumber.textContent =
            progress.toString().padStart(2, "0") + "%";


        if (
            progress > messageIndex * 10 &&
            messageIndex < bootMessages.length
        ) {

            bootLog.textContent =
                "> " + bootMessages[messageIndex];

            messageIndex++;

        }

    }, 80);

}


document.body.style.overflow = "hidden";

setTimeout(bootSequence, 500);


/* =====================================================
   LIVE CLOCK
===================================================== */

const clock = document.getElementById("clock");


function updateClock() {

    const now = new Date();

    let hours = now.getHours();

    const minutes =
        now.getMinutes().toString().padStart(2, "0");

    const seconds =
        now.getSeconds().toString().padStart(2, "0");

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    hours = hours || 12;

    clock.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;

}


updateClock();

setInterval(updateClock, 1000);


/* =====================================================
   TERMINAL TYPING EFFECT
===================================================== */

const typingText =
    document.getElementById("typing-text");


const terminalCommands = [
    " initializing_security_profile",
    " loading_security_modules",
    " scanning_environment",
    " verifying_credentials",
    " establishing_secure_channel",
    " access_granted"
];


let commandIndex = 0;
let charIndex = 0;
let deleting = false;


function typeTerminal() {

    const current =
        terminalCommands[commandIndex];


    if (!deleting) {

        typingText.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeTerminal, 1500);

            return;
        }

    } else {

        typingText.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            commandIndex++;

            if (
                commandIndex >= terminalCommands.length
            ) {
                commandIndex = 0;
            }

        }

    }


    setTimeout(
        typeTerminal,
        deleting ? 30 : 70
    );

}


typeTerminal();


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorRing =
    document.querySelector(".cursor-ring");

const trail1 =
    document.querySelector(".trail-1");

const trail2 =
    document.querySelector(".trail-2");

const trail3 =
    document.querySelector(".trail-3");


let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

let trail1X = 0;
let trail1Y = 0;

let trail2X = 0;
let trail2Y = 0;

let trail3X = 0;
let trail3Y = 0;


document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    trail1X += (mouseX - trail1X) * 0.10;
    trail1Y += (mouseY - trail1Y) * 0.10;

    trail2X += (mouseX - trail2X) * 0.06;
    trail2Y += (mouseY - trail2Y) * 0.06;

    trail3X += (mouseX - trail3X) * 0.03;
    trail3Y += (mouseY - trail3Y) * 0.03;


    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";


    trail1.style.left = trail1X + "px";
    trail1.style.top = trail1Y + "px";


    trail2.style.left = trail2X + "px";
    trail2.style.top = trail2Y + "px";


    trail3.style.left = trail3X + "px";
    trail3.style.top = trail3Y + "px";


    requestAnimationFrame(animateCursor);

}


animateCursor();


/* =====================================================
   CURSOR HOVER EFFECT
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, .magnetic, .operation-card, .tool"
    );


interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        cursorRing.classList.add("hover");

    });


    element.addEventListener("mouseleave", () => {

        cursorRing.classList.remove("hover");

        element.style.transform = "";

    });

});


/* =====================================================
   CLICK RIPPLE
===================================================== */

document.addEventListener("mousedown", () => {

    cursorRing.classList.add("click");

});


document.addEventListener("mouseup", () => {

    setTimeout(() => {

        cursorRing.classList.remove("click");

    }, 100);

});


/* =====================================================
   MAGNETIC ELEMENTS
===================================================== */

const magneticElements =
    document.querySelectorAll(".magnetic");


magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (event) => {

        const rect =
            element.getBoundingClientRect();

        const x =
            event.clientX -
            (rect.left + rect.width / 2);

        const y =
            event.clientY -
            (rect.top + rect.height / 2);


        element.style.transform =
            `translate(${x * 0.12}px, ${y * 0.12}px)`;

    });


    element.addEventListener("mouseleave", () => {

        element.style.transform =
            "translate(0, 0)";

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   INTERSECTION OBSERVER
===================================================== */

const animatedElements =
    document.querySelectorAll(
        ".operation-card, .stat-card, .arsenal-category"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =====================================================
   CONSOLE EASTER EGG
===================================================== */

console.log(
    "%c SMIT // SECURITY OPERATIONS ",
    "background:#00ff66;color:#020403;font-size:16px;padding:8px;"
);

console.log(
    "%c System initialized successfully.",
    "color:#00ff66;font-size:12px;"
);

console.log(
    "%c If you're reading this, you probably like looking under the hood.",
    "color:#718079;font-size:12px;"
);
