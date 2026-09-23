// ============================================
// SECURECORE — MOBILE AUDIO ENGINE
// ============================================

let audioContext = null;

let finalAlarmTimer = null;
let finalAlarmActive = false;


// ============================================
// INITIALIZE AUDIO
// ============================================

function initializeAudio() {

    try {

        if (!audioContext) {

            const AudioContext =
                window.AudioContext ||
                window.webkitAudioContext;

            if (!AudioContext) {

                console.warn(
                    "Web Audio API is not supported."
                );

                return false;
            }

            audioContext =
                new AudioContext();

        }

        return true;

    } catch (error) {

        console.error(
            "Audio initialization failed:",
            error
        );

        return false;

    }

}


// ============================================
// RESUME AUDIO
// ============================================

async function resumeAudio() {

    try {

        initializeAudio();

        if (
            audioContext &&
            audioContext.state === "suspended"
        ) {

            await audioContext.resume();

        }

        console.log(
            "Audio state:",
            audioContext?.state
        );

    } catch (error) {

        console.error(
            "Audio resume failed:",
            error
        );

    }

}


// ============================================
// BASIC TONE
// ============================================

function playTone(
    frequency = 800,
    duration = 150,
    volume = 0.08,
    type = "sine"
) {

    if (!audioContext) {

        initializeAudio();

    }

    if (!audioContext) return;

    if (
        audioContext.state === "suspended"
    ) {

        audioContext.resume();

    }


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type =
        type;

    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        Math.max(volume, 0.001),
        audioContext.currentTime + 0.015
    );


    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime +
        duration / 1000
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime +
        duration / 1000 +
        0.05
    );

}


// ============================================
// START SOUND
// ============================================

function playStartSound() {

    playTone(
        650,
        120,
        0.08,
        "sine"
    );


    setTimeout(
        () => {

            playTone(
                950,
                150,
                0.08,
                "sine"
            );

        },
        140
    );

}


// ============================================
// SCAN BEEP
// ============================================

function playScanBeep() {

    playTone(
        900,
        80,
        0.05,
        "square"
    );

}


// ============================================
// WARNING SOUND
// ============================================

function playWarningSound() {

    playTone(
        700,
        120,
        0.09,
        "square"
    );


    setTimeout(
        () => {

            playTone(
                1000,
                120,
                0.09,
                "square"
            );

        },
        150
    );

}


// ============================================
// CRITICAL ALERT
// ============================================

function playCriticalAlert() {

    if (!initializeAudio()) return;


    resumeAudio();


    // First loud warning

    playTone(
        900,
        180,
        0.16,
        "sawtooth"
    );


    setTimeout(
        () => {

            playTone(
                650,
                180,
                0.16,
                "sawtooth"
            );

        },
        200
    );


    setTimeout(
        () => {

            playTone(
                1050,
                220,
                0.18,
                "sawtooth"
            );

        },
        420
    );

}


// ============================================
// FINAL ALARM
// ============================================

function playFinalAlarm() {

    if (!initializeAudio()) return;


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }


    // Two-tone emergency pattern

    playTone(
        1050,
        280,
        0.20,
        "square"
    );


    setTimeout(
        () => {

            playTone(
                650,
                280,
                0.20,
                "square"
            );

        },
        300
    );

}


// ============================================
// START FINAL ALARM LOOP
// ============================================

function startFinalAlarmLoop() {

    // Prevent duplicate loops

    if (finalAlarmActive) {

        return;

    }


    finalAlarmActive = true;


    console.log(
        "FINAL ALARM STARTED"
    );


    // Play immediately

    playFinalAlarm();


    // Repeat

    finalAlarmTimer =
        setInterval(
            () => {

                if (
                    !finalAlarmActive
                ) {

                    return;

                }


                playFinalAlarm();

            },
            1000
        );

}


// ============================================
// STOP FINAL ALARM
// ============================================

function stopFinalAlarmLoop() {

    finalAlarmActive =
        false;


    if (
        finalAlarmTimer
    ) {

        clearInterval(
            finalAlarmTimer
        );


        finalAlarmTimer =
            null;

    }


    console.log(
        "FINAL ALARM STOPPED"
    );

}


// ============================================
// SUCCESS SOUND
// ============================================

function playSuccessSound() {

    playTone(
        700,
        100,
        0.07,
        "sine"
    );


    setTimeout(
        () => {

            playTone(
                1000,
                150,
                0.07,
                "sine"
            );

        },
        130
    );

}


// ============================================
// STOP ALL AUDIO
// ============================================

function stopAllAudio() {

    stopFinalAlarmLoop();


    if (audioContext) {

        try {

            audioContext.close();

        } catch (error) {

            console.log(
                "Audio context already closed."
            );

        }

        audioContext =
            null;

    }

}