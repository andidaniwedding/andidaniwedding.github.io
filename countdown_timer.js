function updateCountdown() {
    const weddingDate = new Date(Date.UTC(2025, 8, 6, 16, 0, 0));  // UTC time (GMT+0)
    weddingDate.setHours(weddingDate.getHours() - 1);  // Adjust for GMT+1

    const now = new Date(); // Added missing 'now' declaration
    const timeDiff = weddingDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const t = translations[currentLanguage];
    document.getElementById('countdown').innerHTML = `
        <div class="time">${days}<span>${t.countdownDays}</span></div>
        <div class="time">${hours}<span>${t.countdownHours}</span></div>
        <div class="time">${minutes}<span>${t.countdownMinutes}</span></div>
        <div class="time">${seconds}<span>${t.countdownSeconds}</span></div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();