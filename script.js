function startTimer(countdown, container) {
    const countItDown = function () {
        const currentTime = parseFloat(countdown.textContent);

        if (currentTime > 1) {
            countdown.textContent = currentTime - 1;
        } else {
            container.classList.add("done");
            clearInterval(timer);
        }
    }

    const timer = setInterval(countItDown, 1000);
}

const inhaleBtn = document.getElementById("inhale-btn");
const inhaleContainer = document.getElementById("inhale-container");
inhaleBtn.onclick = () => {
    const inhaleCountdown = document.getElementById("inhale-countdown");

    startTimer(inhaleCountdown, inhaleContainer);
}

const holdBtn = document.getElementById("hold-btn");
const holdContainer = document.getElementById("hold-container");
holdBtn.onclick = () => {
    const holdCountdown = document.getElementById("hold-countdown");

    startTimer(holdCountdown, holdContainer);
}

const exhaleBtn = document.getElementById("exhale-btn");
const exhaleContainer = document.getElementById("exhale-container");
exhaleBtn.onclick = () => {
    const exhaleCountdown = document.getElementById("exhale-countdown");

    startTimer(exhaleCountdown, exhaleContainer);
}







