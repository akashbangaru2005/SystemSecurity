// ============================================
// SECURECORE — MAIN APPLICATION
// ============================================

let progress = 0;
let started = false;


// ============================================
// DOM ELEMENTS
// ============================================

const title =
    document.getElementById("mainTitle");

const description =
    document.getElementById("mainDescription");

const progressFill =
    document.getElementById("progressFill");

const progressPercent =
    document.getElementById("progressPercent");

const progressText =
    document.getElementById("progressText");

const terminal =
    document.getElementById("terminal");


// ============================================
// TIME
// ============================================

function getTime() {

    return new Date().toLocaleTimeString([], {
        hour12: false
    });

}


// ============================================
// TERMINAL LOG
// ============================================

function addLog(message, type = "info") {

    if (!terminal) return;

    const line =
        document.createElement("div");

    line.className =
        "log-line";

    line.innerHTML = `
        <span class="time">
            [${getTime()}]
        </span>

        <span class="${type}">
            ${message}
        </span>
    `;

    terminal.appendChild(line);

    terminal.scrollTop =
        terminal.scrollHeight;
}


// ============================================
// PROGRESS
// ============================================

function updateProgress(value) {

    progress =
        Math.min(
            100,
            Math.max(0, value)
        );

    if (progressFill) {

        progressFill.style.width =
            progress + "%";

    }

    if (progressPercent) {

        progressPercent.innerText =
            Math.floor(progress) + "%";

    }
}


// ============================================
// DIAGNOSTIC CARD
// ============================================

function updateCard(
    id,
    status,
    type = "success"
) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.innerText =
        status;

    if (type === "success") {

        element.style.color =
            "var(--green)";

    }

    if (type === "warning") {

        element.style.color =
            "var(--yellow)";

    }

    if (type === "danger") {

        element.style.color =
            "var(--red)";

    }
}


// ============================================
// SLEEP
// ============================================

function sleep(ms) {

    return new Promise(
        resolve =>
            setTimeout(resolve, ms)
    );

}


// ============================================
// BINARY RAIN
// ============================================

function startBinaryRain() {

    // Prevent duplicate canvas

    if (
        document.getElementById("binaryRain")
    ) {

        return;

    }

    const canvas =
        document.createElement("canvas");

    canvas.id =
        "binaryRain";

    document.body.appendChild(canvas);

    const ctx =
        canvas.getContext("2d");

    if (!ctx) return;


    let width =
        canvas.width =
        window.innerWidth;

    let height =
        canvas.height =
        window.innerHeight;


    const fontSize =
        window.innerWidth < 600
            ? 15
            : 18;


    const columns =
        Math.floor(
            width / fontSize
        );


    const drops =
        Array(columns)
            .fill(0)
            .map(
                () =>
                    Math.random() * -50
            );


    const characters =
        "010101010101010101";


    // ========================================
    // RESIZE
    // ========================================

    function resize() {

        width =
            canvas.width =
            window.innerWidth;

        height =
            canvas.height =
            window.innerHeight;

    }

    window.addEventListener(
        "resize",
        resize
    );


    // ========================================
    // DRAW
    // ========================================

    function draw() {

        ctx.fillStyle =
            "rgba(0, 0, 0, 0.08)";

        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        ctx.font =
            `${fontSize}px monospace`;


        for (
            let i = 0;
            i < drops.length;
            i++
        ) {

            const char =
                characters[
                    Math.floor(
                        Math.random() *
                        characters.length
                    )
                ];


            const x =
                i * fontSize;


            const y =
                drops[i] *
                fontSize;


            ctx.fillStyle =
                Math.random() > 0.85
                    ? "#ffffff"
                    : "#00ff66";


            ctx.fillText(
                char,
                x,
                y
            );


            if (
                y > height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;

            }


            drops[i] += 0.65;

        }


        requestAnimationFrame(draw);

    }


    draw();

}


// ============================================
// FINAL BREACH
// ============================================

async function activateFinalBreach() {

    // ========================================
    // BINARY RAIN
    // ========================================

    startBinaryRain();


    // ========================================
    // GLITCH
    // ========================================

    if (
        typeof addTemporaryGlitch ===
        "function"
    ) {

        addTemporaryGlitch();

    }


    // ========================================
    // SCREEN SHAKE
    // ========================================

    if (
        typeof screenShake ===
        "function"
    ) {

        screenShake(800);

    }


    // ========================================
    // SECURITY FLASH
    // ========================================

    if (
        typeof securityFlash ===
        "function"
    ) {

        securityFlash();

    }


    // ========================================
    // VIBRATION
    // ========================================

    if (
        typeof vibrate ===
        "function"
    ) {

        vibrate([
            150,
            70,
            150,
            70,
            300
        ]);

    }


    // ========================================
    // CRITICAL ALERT
    // ========================================

    if (
        typeof playCriticalAlert ===
        "function"
    ) {

        playCriticalAlert();

    }


    await sleep(600);


    // ========================================
    // FINAL TITLE
    // ========================================

    if (title) {

        title.innerText =
            "YOUR PHONE IS HACKED ⚠";

    }


    // ========================================
    // FINAL ALARM LOOP
    // ========================================

    if (
        typeof startFinalAlarmLoop ===
        "function"
    ) {

        startFinalAlarmLoop();

    }


    if (description) {

        description.innerText =
            "CRITICAL SECURITY BREACH DETECTED";

    }


    if (progressText) {

        progressText.innerText =
            "SYSTEM COMPROMISED";

    }


    // ========================================
    // RED PROGRESS BAR
    // ========================================

    if (progressFill) {

        progressFill.style.background =
            "linear-gradient(90deg, #ff3158, #ff003c)";

        progressFill.style.boxShadow =
            "0 0 25px rgba(255,49,88,0.9)";

    }


    updateProgress(100);


    // ========================================
    // CRITICAL LOGS
    // ========================================

    addLog(
        "CRITICAL SECURITY EVENT DETECTED",
        "danger"
    );


    await sleep(350);


    addLog(
        "UNAUTHORIZED SYSTEM ACCESS SIMULATION",
        "danger"
    );


    await sleep(350);


    addLog(
        "SECURITY CORE STATUS: COMPROMISED",
        "danger"
    );


    await sleep(350);


    addLog(
        "DEVICE STATUS: CRITICAL",
        "danger"
    );


    await sleep(500);


    // ========================================
    // INTENSIFY BINARY RAIN
    // ========================================

    const rain =
        document.getElementById(
            "binaryRain"
        );

    if (rain) {

        rain.classList.add(
            "binary-intense"
        );

    }


    // ========================================
    // ADDITIONAL GLITCHES
    // ========================================

    if (
        typeof addTemporaryGlitch ===
        "function"
    ) {

        addTemporaryGlitch();

        setTimeout(
            addTemporaryGlitch,
            700
        );

        setTimeout(
            addTemporaryGlitch,
            1400
        );

    }

}


// ============================================
// START SECURITY SCAN
// ============================================

async function startScan() {

    if (started) return;

    started = true;


    // ========================================
    // MOBILE AUDIO UNLOCK
    // ========================================

    if (
        typeof initializeAudio ===
        "function"
    ) {

        initializeAudio();

    }


    if (
        typeof resumeAudio ===
        "function"
    ) {

        await resumeAudio();

    }


    // IMPORTANT:
    // This is executed directly from the
    // START SECURITY SCAN button interaction.

    if (
        typeof playStartSound ===
        "function"
    ) {

        playStartSound();

    }


    // ========================================
    // VIBRATION
    // ========================================

    if (
        typeof vibrate ===
        "function"
    ) {

        vibrate([80]);

    }


    // ========================================
    // FULLSCREEN
    // ========================================

    if (
        typeof enableFullscreen ===
        "function"
    ) {

        enableFullscreen();

    }


    // ========================================
    // HIDE START OVERLAY
    // ========================================

    const startOverlay =
        document.getElementById(
            "startOverlay"
        );


    if (startOverlay) {

        startOverlay.classList.add(
            "hidden"
        );

    }


    // ========================================
    // INITIALIZATION
    // ========================================

    addLog(
        "SecureCore security engine initialized.",
        "info"
    );


    await sleep(700);


    if (title) {

        title.innerText =
            "Scanning Device Environment";

    }


    if (description) {

        description.innerText =
            "Running advanced security diagnostics...";

    }


    if (progressText) {

        progressText.innerText =
            "SYSTEM ANALYSIS";

    }


    addLog(
        "Security environment initialized.",
        "ok"
    );


    await sleep(900);


    // ========================================
    // MEMORY INTEGRITY
    // ========================================

    updateCard(
        "memoryStatus",
        "SCANNING"
    );


    addLog(
        "Checking memory integrity...",
        "info"
    );


    updateProgress(12);


    await sleep(1200);


    updateCard(
        "memoryStatus",
        "VERIFIED"
    );


    addLog(
        "Memory integrity verified.",
        "ok"
    );


    updateProgress(25);


    await sleep(700);


    // ========================================
    // NETWORK ANALYSIS
    // ========================================

    updateCard(
        "networkStatus",
        "ANALYZING"
    );


    addLog(
        "Analyzing network environment...",
        "info"
    );


    updateProgress(32);


    await sleep(1400);


    updateCard(
        "networkStatus",
        "STABLE"
    );


    addLog(
        "Network environment analyzed.",
        "ok"
    );


    updateProgress(45);


    await sleep(700);


    // ========================================
    // SYSTEM SERVICES
    // ========================================

    updateCard(
        "serviceStatus",
        "CHECKING"
    );


    addLog(
        "Inspecting system services...",
        "info"
    );


    updateProgress(54);


    await sleep(1200);


    updateCard(
        "serviceStatus",
        "ANOMALY",
        "warning"
    );


    addLog(
        "Unusual security event detected.",
        "warn"
    );


    if (
        typeof addTemporaryGlitch ===
        "function"
    ) {

        addTemporaryGlitch();

    }


    if (
        typeof playWarningSound ===
        "function"
    ) {

        playWarningSound();

    }


    if (
        typeof vibrate ===
        "function"
    ) {

        vibrate([
            100,
            60,
            100
        ]);

    }


    updateProgress(63);


    await sleep(900);


    // ========================================
    // SECURITY CORE
    // ========================================

    updateCard(
        "securityStatus",
        "ALERT",
        "danger"
    );


    addLog(
        "Security verification required.",
        "danger"
    );


    if (title) {

        title.innerText =
            "Security Verification Required";

    }


    if (description) {

        description.innerText =
            "Additional diagnostic modules are being initialized...";

    }


    if (progressText) {

        progressText.innerText =
            "SECURITY ANALYSIS";

    }


    updateProgress(70);


    await sleep(900);


    // ========================================
    // SECURITY SIMULATION STAGES
    // ========================================

    currentStage = 0;

    runStage();


    // Five stages ≈ 18 seconds

    await sleep(18100);


    // ========================================
    // FINAL VERIFICATION
    // ========================================

    updateCard(
        "securityStatus",
        "VERIFYING"
    );


    addLog(
        "Finalizing security module verification...",
        "info"
    );


    updateProgress(92);


    await sleep(1200);


    if (title) {

        title.innerText =
            "Final Security Verification";

    }


    if (description) {

        description.innerText =
            "Completing final system integrity analysis...";

    }


    if (progressText) {

        progressText.innerText =
            "FINAL VERIFICATION";

    }


    // ========================================
    // COMPLETE PROGRESS
    // ========================================

    for (
        let i = 93;
        i <= 100;
        i++
    ) {

        updateProgress(i);

        await sleep(120);

    }


    // ========================================
    // COMPROMISED STATE
    // ========================================

    updateCard(
        "securityStatus",
        "COMPROMISED",
        "danger"
    );


    addLog(
        "Critical security event detected.",
        "danger"
    );


    await sleep(500);


    // ========================================
    // FINAL BREACH
    // ========================================

    await activateFinalBreach();

}


// ============================================
// START BUTTON
// ============================================

const startButton =
    document.getElementById(
        "startButton"
    );


if (startButton) {

    startButton.addEventListener(
        "click",
        startScan
    );

}


// ============================================
// PARTICLES
// ============================================

if (
    typeof createParticles ===
    "function"
) {

    createParticles();

}


// ============================================
// PREVENT TOUCH SCROLL
// ============================================

document.addEventListener(
    "touchmove",
    function(event) {

        if (started) {

            event.preventDefault();

        }

    },
    {
        passive: false
    }
);