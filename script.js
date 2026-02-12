const noBtn = document.getElementById('no-button');
const music = document.getElementById('bg-music');

// "No" button runs away
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Transition to Surprise and Play Music
function handleYes() {
    music.play().catch(e => console.log("Music couldn't autoplay:", e));
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}

// Open the envelope
function openLetter() {
    const letter = document.getElementById('valentine-letter');
    letter.style.transform = 'translateY(-120px)';
    letter.style.zIndex = '10';
}

// Return to Main Page
function goBack() {
    document.getElementById('surprise-page').classList.add('hidden');
    document.getElementById('question-page').classList.remove('hidden');
    // Reset letter
    document.getElementById('valentine-letter').style.transform = 'translateY(0)';
}
