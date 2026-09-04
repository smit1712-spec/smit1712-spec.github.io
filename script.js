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
   CUSTOM CURSOR // ADVANCED
===================================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

const trail1 = document.querySelector(".trail-1");
const trail2 = document.querySelector(".trail-2");
const trail3 = document.querySelector(".trail-3");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

let trail1X = mouseX;
let trail1Y = mouseY;

let trail2X = mouseX;
let trail2Y = mouseY;

let trail3X = mouseX;
let trail3Y = mouseY;


/* =========================================
   MOUSE TRACKING
========================================= */

document.addEventListener("mousemove", (event) => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    if (cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    }

});


/* =========================================
   SMOOTH CURSOR ANIMATION
========================================= */

function animateCursor() {

    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;

    trail1X += (mouseX - trail1X) * 0.11;
    trail1Y += (mouseY - trail1Y) * 0.11;

    trail2X += (mouseX - trail2X) * 0.07;
    trail2Y += (mouseY - trail2Y) * 0.07;

    trail3X += (mouseX - trail3X) * 0.04;
    trail3Y += (mouseY - trail3Y) * 0.04;


    if (cursorRing) {
        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";
    }

    if (trail1) {
        trail1.style.left = trail1X + "px";
        trail1.style.top = trail1Y + "px";
    }

    if (trail2) {
        trail2.style.left = trail2X + "px";
        trail2.style.top = trail2Y + "px";
    }

    if (trail3) {
        trail3.style.left = trail3X + "px";
        trail3.style.top = trail3Y + "px";
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* =========================================
   INTERACTIVE HOVER
========================================= */

const interactiveElements = document.querySelectorAll(
    "a, button, .magnetic, .operation-card, .tool, .arsenal-category"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {

        if (cursorRing) {
            cursorRing.classList.add("hover");
        }

        document.body.classList.add("cursor-active");

    });

    element.addEventListener("mouseleave", () => {

        if (cursorRing) {
            cursorRing.classList.remove("hover");
        }

        document.body.classList.remove("cursor-active");

    });

});


/* =========================================
   CLICK EFFECT
========================================= */

document.addEventListener("mousedown", () => {

    if (!cursorRing) return;

    cursorRing.classList.remove("click");

    void cursorRing.offsetWidth;

    cursorRing.classList.add("click");

});


document.addEventListener("mouseup", () => {

    setTimeout(() => {

        if (cursorRing) {
            cursorRing.classList.remove("click");
        }

    }, 350);

});


/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticElements =
    document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (event) => {

        const rect = element.getBoundingClientRect();

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

/* =====================================================
   LIVE DASHBOARD // MOUSE PARALLAX
===================================================== */

const hero = document.querySelector(".hero");
const securityPanel = document.querySelector(".security-panel");
const heroContent = document.querySelector(".hero-content");

if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const rect = hero.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;


        /* Security panel */

        if (securityPanel) {

            securityPanel.style.transform =
                `perspective(900px)
                 rotateY(${x * 5}deg)
                 rotateX(${y * -5}deg)
                 translate(${x * 10}px, ${y * 10}px)`;

        }


        /* Hero content */

        if (heroContent) {

            heroContent.style.transform =
                `translate(${x * -5}px, ${y * -5}px)`;

        }

    });


    hero.addEventListener("mouseleave", () => {

        if (securityPanel) {

            securityPanel.style.transform =
                "perspective(900px) rotateY(0deg) rotateX(0deg) translate(0, 0)";

        }


        if (heroContent) {

            heroContent.style.transform =
                "translate(0, 0)";

        }

    });

}

/* =====================================================
   LIVE CYBER NETWORK // HERO BACKGROUND
===================================================== */

const networkCanvas = document.getElementById("security-network");
const networkHero = document.querySelector(".hero");

if (networkCanvas && networkHero) {

    const ctx = networkCanvas.getContext("2d");

    let nodes = [];
    let width = 0;
    let height = 0;

    const mouse = {
        x: -1000,
        y: -1000
    };


    /* =========================================
       CREATE NETWORK NODES
    ========================================= */

    function createNodes() {

        nodes = [];

        const isMobile = window.innerWidth <= 768;
        const count = isMobile ? 22 : 45;

        for (let i = 0; i < count; i++) {

            nodes.push({

                x: Math.random() * width,
                y: Math.random() * height,

                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,

                radius: Math.random() * 1.5 + 0.7
            });
        }
    }


    /* =========================================
       RESIZE CANVAS
    ========================================= */

    function resizeNetwork() {

        const rect = networkHero.getBoundingClientRect();

        width = rect.width;
        height = rect.height;

        const dpr =
            Math.min(window.devicePixelRatio || 1, 2);

        networkCanvas.width = width * dpr;
        networkCanvas.height = height * dpr;

        networkCanvas.style.width = width + "px";
        networkCanvas.style.height = height + "px";

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        createNodes();
    }


    /* =========================================
       MOUSE TRACKING
    ========================================= */

    networkHero.addEventListener("mousemove", (event) => {

        const rect =
            networkHero.getBoundingClientRect();

        mouse.x =
            event.clientX - rect.left;

        mouse.y =
            event.clientY - rect.top;

    });


    networkHero.addEventListener("mouseleave", () => {

        mouse.x = -1000;
        mouse.y = -1000;

    });


    /* =========================================
       DRAW NETWORK
    ========================================= */

    function drawNetwork() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        /* -------------------------------------
           MOVE NODES
        ------------------------------------- */

        nodes.forEach(node => {

            node.x += node.vx;
            node.y += node.vy;


            if (node.x <= 0 || node.x >= width) {
                node.vx *= -1;
            }

            if (node.y <= 0 || node.y >= height) {
                node.vy *= -1;
            }


            /* Mouse repulsion */

            const dx =
                node.x - mouse.x;

            const dy =
                node.y - mouse.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 140) {

                const force =
                    (140 - distance) / 140;

                node.x +=
                    (dx / (distance || 1)) *
                    force *
                    0.7;

                node.y +=
                    (dy / (distance || 1)) *
                    force *
                    0.7;

            }

        });


        /* -------------------------------------
           NODE CONNECTIONS
        ------------------------------------- */

        for (let i = 0; i < nodes.length; i++) {

            for (let j = i + 1; j < nodes.length; j++) {

                const a = nodes[i];
                const b = nodes[j];

                const dx =
                    a.x - b.x;

                const dy =
                    a.y - b.y;

                const distance =
                    Math.sqrt(dx * dx + dy * dy);


                if (distance < 150) {

                    const opacity =
                        (1 - distance / 150) * 0.28;

                    ctx.beginPath();

                    ctx.moveTo(
                        a.x,
                        a.y
                    );

                    ctx.lineTo(
                        b.x,
                        b.y
                    );

                    ctx.strokeStyle =
                        `rgba(0, 255, 102, ${opacity})`;

                    ctx.lineWidth = 0.7;

                    ctx.stroke();

                }

            }

        }


        /* -------------------------------------
           MOUSE CONNECTIONS
        ------------------------------------- */

        nodes.forEach(node => {

            const dx =
                node.x - mouse.x;

            const dy =
                node.y - mouse.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);


            if (distance < 180) {

                const opacity =
                    (1 - distance / 180) * 0.5;

                ctx.beginPath();

                ctx.moveTo(
                    node.x,
                    node.y
                );

                ctx.lineTo(
                    mouse.x,
                    mouse.y
                );

                ctx.strokeStyle =
                    `rgba(0, 255, 102, ${opacity})`;

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        });

/* -------------------------------------
   LIVE DATA PACKETS
------------------------------------- */

const packetTime = performance.now() * 0.001;

for (let i = 0; i < nodes.length - 1; i += 5) {

    const a = nodes[i];
    const b = nodes[i + 1];

    const dx = a.x - b.x;
    const dy = a.y - b.y;

    const distance =
        Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {

        const progress =
            (packetTime * 0.18 + i * 0.07) % 1;

        const packetX =
            a.x + (b.x - a.x) * progress;

        const packetY =
            a.y + (b.y - a.y) * progress;

        ctx.beginPath();

        ctx.arc(
            packetX,
            packetY,
            2,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0, 255, 102, 1)";

        ctx.shadowBlur = 12;

        ctx.shadowColor =
            "rgba(0, 255, 102, 1)";

        ctx.fill();

        ctx.shadowBlur = 0;
    }
}
       
        /* -------------------------------------
           DRAW NODES
        ------------------------------------- */

        nodes.forEach(node => {

            ctx.beginPath();

            ctx.arc(
                node.x,
                node.y,
                node.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(0, 255, 102, 0.8)";

            ctx.shadowBlur = 8;

            ctx.shadowColor =
                "rgba(0, 255, 102, 0.7)";

            ctx.fill();

            ctx.shadowBlur = 0;

        });


        requestAnimationFrame(drawNetwork);

    }


    /* =========================================
       START NETWORK
    ========================================= */

    window.addEventListener(
        "resize",
        resizeNetwork
    );

    resizeNetwork();

    drawNetwork();

}
