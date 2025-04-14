const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');

// Define o estilo inicial
heroSection.style.backgroundImage = "url('fundo2.png')";

themeToggle.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('bg-primary');

    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('bg-dark')) {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
        document.getElementById('themeText').textContent = 'modo escuro';
        heroSection.style.backgroundImage = "url('fundo2.png')";
    } else {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
        document.getElementById('themeText').textContent = 'modo claro';
        heroSection.style.backgroundImage = "url('fundo1.png')";
    }
});