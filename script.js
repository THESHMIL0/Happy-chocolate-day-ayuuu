function releaseChocolates() {
    // 1. Show the hidden sweet message
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';

    // 2. Change button text
    const btn = document.getElementById('giftBtn');
    btn.innerText = "Enjoy! 🍫";

    // 3. Create falling elements
    const emojis = ['🍫', '🍬', '🍩', '🍪', '❤️', '🧁'];
    
    // Create 30 falling items
    for (let i = 0; i < 30; i++) {
        createFallingItem(emojis);
    }
}

function createFallingItem(emojis) {
    const item = document.createElement('div');
    item.classList.add('falling-item');
    
    // Pick a random emoji
    item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Randomize position and speed
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = (Math.random() * 2 + 2) + 's'; // 2 to 4 seconds
    item.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Size variation
    
    document.body.appendChild(item);

    // Remove the item after animation to keep the phone running smoothly
    setTimeout(() => {
        item.remove();
    }, 4000);
}
