let chocolatesEaten = 0;
let isBoxOpen = false;

function openBox() {
    if (isBoxOpen) return; // Prevent re-opening
    
    const box = document.querySelector('.box-wrapper');
    const instruction = document.getElementById('instruction');

    // Add shake effect first
    box.classList.add('shake');
    
    setTimeout(() => {
        box.classList.remove('shake');
        box.classList.add('open');
        isBoxOpen = true;
        instruction.innerHTML = "Tap the chocolates to eat them! 😋";
    }, 500); // Wait 0.5s for shake to finish
}

function eatChocolate(element, emoji) {
    if (!isBoxOpen) return;
    
    // 1. Create floating "Yum!" text
    const rect = element.getBoundingClientRect();
    const yum = document.createElement('div');
    yum.innerText = ["Yum! 😋", "Sweet!", "Delicious!"][chocolatesEaten]; 
    yum.className = 'pop-text';
    yum.style.left = rect.left + 'px';
    yum.style.top = rect.top + 'px';
    document.body.appendChild(yum);
    
    // 2. Hide the chocolate
    element.style.visibility = 'hidden'; // Keeps layout stable but invisible
    
    // 3. Remove floating text after animation
    setTimeout(() => yum.remove(), 1000);

    // 4. Update count
    chocolatesEaten++;

    // 5. Check if all are eaten
    if (chocolatesEaten === 3) {
        setTimeout(showFinalMessage, 800);
    }
}

function showFinalMessage() {
    document.getElementById('instruction').style.display = 'none';
    document.querySelector('.box-wrapper').style.display = 'none'; // Hide empty box
    
    const msg = document.getElementById('final-msg');
    msg.style.display = 'block';
    
    // Confetti rain
    createConfetti();
}

function createConfetti() {
    for(let i=0; i<30; i++) {
        const conf = document.createElement('div');
        conf.innerHTML = ['❤️','🍫','✨'][Math.floor(Math.random()*3)];
        conf.style.position = 'fixed';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.top = '-10vh';
        conf.style.fontSize = Math.random() * 20 + 10 + 'px';
        conf.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        document.body.appendChild(conf);
    }
    
    // Add CSS for falling
    const style = document.createElement('style');
    style.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(360deg); } }`;
    document.head.appendChild(style);
}

function replay() {
    location.reload();
}
