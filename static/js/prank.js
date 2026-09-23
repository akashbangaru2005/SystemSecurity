// ============================================
// SECURECORE SECURITY SIMULATION
// ============================================

const prankStages = [

    {
        title: "NETWORK ANALYSIS",
        icon: "⌁",
        message: "Analyzing network environment...",
        details: [
            "Detecting network interface...",
            "Analyzing connection parameters...",
            "Checking security configuration..."
        ],
        duration: 3500
    },

    {
        title: "DEVICE INTEGRITY",
        icon: "◉",
        message: "Checking system integrity...",
        details: [
            "Initializing integrity scanner...",
            "Checking system components...",
            "Verifying device environment..."
        ],
        duration: 3500
    },

    {
        title: "VISUAL SENSOR",
        icon: "◈",
        message: "Initializing visual security module...",
        details: [
            "Loading visual security module...",
            "Preparing sensor interface...",
            "Running security simulation..."
        ],
        duration: 3500
    },

    {
        title: "LOCATION ANALYSIS",
        icon: "⌖",
        message: "Simulating regional security analysis...",
        details: [
            "Initializing location module...",
            "Analyzing regional security parameters...",
            "Completing location simulation..."
        ],
        duration: 3500
    },

    {
        title: "BIOMETRIC AUTHENTICATION",
        icon: "◇",
        message: "Preparing biometric verification simulation...",
        details: [
            "Initializing biometric interface...",
            "Preparing verification sequence...",
            "Running authentication simulation..."
        ],
        duration: 4000
    }

];


let currentStage = 0;


// ============================================
// SHOW SIMULATION
// ============================================

function showSimulation(stage) {

    const modal = document.getElementById("simulationModal");

    const icon = document.getElementById("simulationIcon");

    const title = document.getElementById("simulationTitle");

    const content = document.getElementById("simulationContent");

    const progress = document.getElementById("simulationProgress");


    if (!modal) return;


    icon.innerText = stage.icon;

    title.innerText = stage.title;


    content.innerHTML = `

        <div class="simulation-main-message">
            ${stage.message}
        </div>

        <div class="simulation-details">

            ${stage.details.map(detail => `
                <div class="simulation-detail">
                    <span class="detail-dot"></span>
                    ${detail}
                </div>
            `).join("")}

        </div>

    `;


    progress.style.width = "0%";


    modal.classList.remove("hidden");


    // Animate progress bar

    setTimeout(() => {

        progress.style.transition =
            `width ${stage.duration}ms linear`;

        progress.style.width = "100%";

    }, 50);

}


// ============================================
// HIDE SIMULATION
// ============================================

function hideSimulation() {

    const modal =
        document.getElementById("simulationModal");

    if (!modal) return;

    modal.classList.add("hidden");

}


// ============================================
// RUN CURRENT STAGE
// ============================================

function runStage() {

    if (currentStage >= prankStages.length) {

        hideSimulation();

        return;

    }


    const stage =
        prankStages[currentStage];


    showSimulation(stage);


    // Security warning sound

    if (typeof playWarningSound === "function") {
        playWarningSound();
    }


    // Small vibration where supported

    if (typeof vibrate === "function") {
        vibrate([100, 50, 100]);
    }


    setTimeout(() => {

        hideSimulation();

        currentStage++;

        runStage();

    }, stage.duration);

}


// ============================================
// RESET SIMULATION
// ============================================

function resetStages() {

    currentStage = 0;

    hideSimulation();

}

