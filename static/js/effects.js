// ============================================
// SECURECORE VISUAL EFFECTS
// ============================================


// ============================================
// VIBRATION
// ============================================

function vibrate(pattern = [100]) {

    if ("vibrate" in navigator) {

        try {
            navigator.vibrate(pattern);
        } catch (error) {

            console.log(
                "Vibration unavailable."
            );

        }

    }

}


// ============================================
// FULLSCREEN
// ============================================

async function enableFullscreen() {

    try {

        if (
            document.documentElement.requestFullscreen &&
            !document.fullscreenElement
        ) {

            await document.documentElement.requestFullscreen();

        }

    } catch (error) {

        console.log(
            "Fullscreen permission unavailable."
        );

    }

}


// ============================================
// PARTICLES
// ============================================

function createParticles() {

    const container =
        document.getElementById("particles");

    if (!container) return;


    // Prevent duplicate particles

    container.innerHTML = "";


    const particleCount =
        window.innerWidth <= 700 ? 18 : 30;


    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");


        particle.className =
            "security-particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 5 + "s";


        particle.style.animationDuration =
            (4 + Math.random() * 6) + "s";


        particle.style.opacity =
            (0.2 + Math.random() * 0.6);


        container.appendChild(particle);

    }

}


// ============================================
// TEMPORARY GLITCH EFFECT
// ============================================

function addTemporaryGlitch() {

    const body =
        document.body;

    if (!body) return;


    body.classList.add(
        "glitch-effect"
    );


    setTimeout(() => {

        body.classList.remove(
            "glitch-effect"
        );

    }, 700);

}


// ============================================
// SECURITY ALERT FLASH
// ============================================

function securityFlash() {

    const overlay =
        document.createElement("div");


    overlay.className =
        "security-flash";


    document.body.appendChild(
        overlay
    );


    requestAnimationFrame(() => {

        overlay.classList.add(
            "active"
        );

    });


    setTimeout(() => {

        overlay.classList.remove(
            "active"
        );

    }, 250);


    setTimeout(() => {

        overlay.remove();

    }, 500);

}


// ============================================
// SCREEN SHAKE
// ============================================

function screenShake(duration = 500) {

    const body =
        document.body;

    if (!body) return;


    body.classList.add(
        "screen-shake"
    );


    setTimeout(() => {

        body.classList.remove(
            "screen-shake"
        );

    }, duration);

}


// ============================================
// RANDOM SECURITY GLITCH
// ============================================

function randomGlitch() {

    const chance =
        Math.random();


    if (chance > 0.55) {

        addTemporaryGlitch();

    }

}


// ============================================
// EFFECT STYLES
// ============================================

(function injectEffectStyles() {

    if (
        document.getElementById(
            "securecore-effect-styles"
        )
    ) {

        return;

    }


    const style =
        document.createElement("style");


    style.id =
        "securecore-effect-styles";


    style.textContent = `

        /* PARTICLES */

        .security-particle {

            position: absolute;

            width: 2px;

            height: 2px;

            border-radius: 50%;

            background: rgba(
                0,
                255,
                157,
                0.7
            );

            box-shadow:
                0 0 8px rgba(
                    0,
                    255,
                    157,
                    0.6
                );

            pointer-events: none;

            animation:
                particleFloat
                linear infinite;

        }


        @keyframes particleFloat {

            0% {

                transform:
                    translate3d(
                        0,
                        0,
                        0
                    );

            }

            50% {

                transform:
                    translate3d(
                        20px,
                        -30px,
                        0
                    );

            }

            100% {

                transform:
                    translate3d(
                        -10px,
                        -70px,
                        0
                    );

            }

        }


        /* GLITCH */

        .glitch-effect {

            animation:
                securityGlitch
                0.12s
                linear
                4;

        }


        @keyframes securityGlitch {

            0% {
                transform: translate(0);
            }

            25% {
                transform: translate(-2px, 1px);
            }

            50% {
                transform: translate(2px, -1px);
            }

            75% {
                transform: translate(-1px, -2px);
            }

            100% {
                transform: translate(0);
            }

        }


        /* FLASH */

        .security-flash {

            position: fixed;

            inset: 0;

            background:
                rgba(
                    255,
                    49,
                    88,
                    0.18
                );

            opacity: 0;

            pointer-events: none;

            z-index: 9999;

            transition:
                opacity 0.15s ease;

        }


        .security-flash.active {

            opacity: 1;

        }


        /* SCREEN SHAKE */

        .screen-shake {

            animation:
                screenShake
                0.1s
                linear
                5;

        }


        @keyframes screenShake {

            0% {
                transform: translate(0);
            }

            20% {
                transform: translate(
                    -3px,
                    2px
                );
            }

            40% {
                transform: translate(
                    3px,
                    -2px
                );
            }

            60% {
                transform: translate(
                    -2px,
                    -1px
                );
            }

            80% {
                transform: translate(
                    2px,
                    1px
                );
            }

            100% {
                transform: translate(0);
            }

        }

    `;


    document.head.appendChild(
        style
    );

})();


// ============================================
// INITIALIZE
// ============================================

createParticles();

