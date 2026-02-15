// 1. Efeito de Navbar Dinâmica (Muda de cor ao rolar)
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Efeito de Digitação (Typewriter Effect)
const textElement = document.querySelector('.typing-text');
const phrases = [
    "Desenvolvedor Java",      
    "Full Stack Developer",    
    "Backend & APIs",           
    "Focado em Soluções"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        // Apagando
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Escrevendo
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Velocidade de digitação
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pausa quando termina de escrever a frase completa
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Passa para a próxima frase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Inicia o efeito quando a página carrega
document.addEventListener('DOMContentLoaded', typeWriter);