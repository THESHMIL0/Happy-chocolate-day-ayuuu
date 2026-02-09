document.getElementById('chocolateBox').addEventListener('click', function() {
    this.classList.toggle('open');
    createHearts();
});

function createHearts() {
    const container = document.querySelector('.hearts-container');
    
    // Create 10 floating hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-20px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = `float ${Math.random() * 2 + 3}s linear`;
        heart.style.opacity = '0.7';
        
        container.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Add CSS animation for hearts dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
