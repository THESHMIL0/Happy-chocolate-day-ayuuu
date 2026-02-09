let count = 0;
let isOpen = false;

const box = document.getElementById('box');
const chocolates = document.querySelectorAll('.choco');
const hint = document.getElementById('hint');
const finalCard = document.getElementById('final-card');

// Open Box Event
box.addEventListener('click', function() {
    if (isOpen) return; // Stop if already open
    
    // Add Shake
    box.classList.add('shake');
    
    // Open after shake
    setTimeout(() => {
        box.classList.remove('shake');
        box.classList.add('open');
        isOpen = true;
        hint.innerText = "Eat the chocolates! 😋";
    }, 500);
});

// Eat Chocolates Event
chocolates.forEach(choco => {
    choco.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent clicking the box underneath
        
        if (!isOpen) return;

        // Hide chocolate visually
        choco.style.opacity = '0';
        choco.style.transform = 'scale(0)';
        
        count++;

        // Show "Yum" text
        showYum(e.clientX, e.clientY);

        // Check if all eaten
        if (count === 3) {
            setTimeout(() => {
                finalCard.classList.remove('hidden');
                hint.style.display = 'none';
                createConfetti();
            }, 800);
        }
    });
});

function showYum(x, y) {
    const el = document.createElement('div');
    el.innerText = "Yum! ❤️";
    el.style.position = 'fixed';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = '#d32f2f';
    el.style.fontWeight = 'bold';
    el.style.pointerEvents = 'none';
    el.style.transition = '1s';
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transform = 'translateY(-50px)';
        el.style.opacity = '0';
    }, 50);

    setTimeout(() => el.remove(), 1000);
}

function createConfetti() {
    for(let i=0; i<50; i++) {
        const c = document.createElement('div');
        c.innerHTML = Math.random() > 0.5 ? '❤️' : '🍫';
        c.style.position = 'fixed';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-10vh';
        c.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(c);
    }
    
    const style = document.createElement('style');
    style.innerHTML = `@keyframes fall { to { transform: translateY(110vh); } }`;
    document.head.appendChild(style);
}
