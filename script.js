const noBtn = document.getElementById('no-button');

// Keep the "No" button moving
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function to switch from Question to Envelope
function showEnvelope() {
    document.getElementById('question-page').style.display = 'none';
    const envelopePage = document.getElementById('envelope-page');
    envelopePage.style.display = 'flex';
}

// Logic to "Open" the letter
document.getElementById('openBtn').addEventListener('click', () => {
    const letter = document.querySelector('.letter');
    letter.style.transform = 'translateY(-100px)';
    letter.style.zIndex = '3';
});
