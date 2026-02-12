const noBtn = document.getElementById('no-button');

noBtn.addEventListener('mouseover', () => {
    // Calculate random coordinates within the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Set the new position
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function handleYes() {
    alert("fuh finally ❤️");
    // You can redirect to another page or change the text here
}