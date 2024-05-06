function startTimer(countdown, container) {
    return new Promise((resolve, reject) => {

        const countItDown = function () {
            const currentTime = parseFloat(countdown.textContent);

            if (currentTime > 1) {
                countdown.textContent = currentTime - 1;
            } else {
                container.classList.add("done");
                clearInterval(timer);
                resolve();
            }
        }

        const timer = setInterval(countItDown, 1000);
    })
}

function breathingDone(startBtn) {
    startBtn.classList.add("done");

    const description = document.querySelector("p");
    description.textContent = "Congratulations on completing your breathing exercise! Taking this time for yourself is a wonderful step towards nurturing your mental well-being. Keep breathing, keep thriving!";
    description.style.width = "400px";
    description.style.marginTop = "-100px";
}

const startBtn = document.getElementById("start-btn");
const inhaleContainer = document.getElementById("inhale-container");

const holdContainer = document.getElementById("hold-container");

const exhaleContainer = document.getElementById("exhale-container");

const inhaleCountdown = document.getElementById("inhale-countdown");
const holdCountdown = document.getElementById("hold-countdown");
const exhaleCountdown = document.getElementById("exhale-countdown");

startBtn.onclick = async () => {
    startBtn.textContent = "INHALE";
    await startTimer(inhaleCountdown, inhaleContainer);
    startBtn.textContent = "HOLD";
    await startTimer(holdCountdown, holdContainer);
    startBtn.textContent = "EXHALE";
    await startTimer(exhaleCountdown, exhaleContainer);

    breathingDone(startBtn);
}





