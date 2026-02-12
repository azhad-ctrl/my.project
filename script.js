const noBtn = document.getElementById('no-button');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function showEnvelope() {
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('envelope-page').classList.remove('hidden');
}

document.getElementById('openBtn').addEventListener('click', () => {
    const letter = document.querySelector('.letter');
    letter.style.transform = 'translateY(-100px)';
    letter.style.zIndex = "5";
});
