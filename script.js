const noBtn = document.getElementById('no-button');
const music = document.getElementById('bg-music');

// "No" button movement
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Click "Yes" -> Start Music + Show Flowers
function handleYes() {
    music.play().catch(e => console.log("Music play failed:", e));
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}

// Click "Open" -> Animate Letter
function openLetter() {
    const letter = document.getElementById('valentine-letter');
    letter.style.transform = 'translateY(-130px)';
    letter.style.zIndex = '10';
}

// Click "Back" -> Return to Main
function goBack() {
    document.getElementById('surprise-page').classList.add('hidden');
    document.getElementById('question-page').classList.remove('hidden');
    document.getElementById('valentine-letter').style.transform = 'translateY(0)';
}
