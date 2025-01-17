function updateCountdown() {
    const weddingDate = new Date("2025-09-06T16:00:00"); // Adjust date and time
    const now = new Date();
    const timeDiff = weddingDate - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerHTML = "The big day is here!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="time">${days} <span>days</span></div>
        <div class="time">${hours} <span>hours</span></div>
        <div class="time">${minutes} <span>minutes</span></div>
        <div class="time">${seconds} <span>seconds</span></div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
