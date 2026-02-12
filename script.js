const noBtn = document.getElementById('no-button');
const music = document.getElementById('bg-music');

// Text Config
const titleText = "My Dearest,";
const messageText = "I knew you'd say yes! ❤️ You make every day feel like Valentine's Day. I'm so lucky to have you.";
const sigText = "Forever Yours";

// No Button Logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function handleYes() {
    music.play().catch(e => console.log("Audio play blocked by browser"));
    document.getElementById('question-page').classList.add('hidden');
    document.getElementById('surprise-page').classList.remove('hidden');
}

function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; 
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function openLetter() {
    const letter = document.getElementById('valentine-letter');
    const btn = document.getElementById('main-action-btn');
    
    btn.style.display = 'none'; // Hide open button once clicked
    letter.style.transform = 'translateY(-150px)';
    letter.style.zIndex = '10';

    setTimeout(() => {
        typeWriter(titleText, "letter-title", 100, () => {
            typeWriter(messageText, "typewriter-text", 50, () => {
                typeWriter(sigText, "letter-sig", 100);
            });
        });
    }, 1000);
}

function goBack() {
    const letter = document.getElementById('valentine-letter');
    const btn = document.getElementById('main-action-btn');
    
    // Reset state
    letter.style.transform = 'translateY(0)';
    letter.style.zIndex = '2';
    btn.style.display = 'block';
    document.getElementById("letter-title").innerHTML = "";
    document.getElementById("typewriter-text").innerHTML = "";
    document.getElementById("letter-sig").innerHTML = "";

    document.getElementById('surprise-page').classList.add('hidden');
    document.getElementById('question-page').classList.remove('hidden');
}
