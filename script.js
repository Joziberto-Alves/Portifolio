const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const heroSection = document.querySelector('.hero');
const button =  document.getElementById('sobreLink');
const contactButton = document.getElementById('social-links');
const contactButton1 = document.getElementById('social-links1');
const contactButton2 = document.getElementById('social-links2');
const contactButton3 = document.getElementById('social-links3');
const contactButton4 = document.getElementById('social-links4');

// Define o estilo inicial
heroSection.style.backgroundImage = "url('fundo2.png')";

themeToggle.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-light');
    body.classList.toggle('bg-light');
    body.classList.toggle('text-dark');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('bg-primary');
    button.classList.toggle('btn-outline-light')
    button.classList.toggle('btn-outline-dark')
    contactButton.classList.toggle('btn-outline-light');
    contactButton.classList.toggle('btn-outline-dark');
    contactButton1.classList.toggle('btn-outline-light');
    contactButton1.classList.toggle('btn-outline-dark');
    contactButton2.classList.toggle('btn-outline-light');
    contactButton2.classList.toggle('btn-outline-dark');
    contactButton3.classList.toggle('btn-outline-light');
    contactButton3.classList.toggle('btn-outline-dark');
    contactButton4.classList.toggle('btn-outline-light');
    contactButton4.classList.toggle('btn-outline-dark');

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

// Adiciona um evento de clique ao documento
// para fechar o menu quando clicar fora dele
document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar-collapse");
    const isClickInsideNavbar = navbar.contains(event.target);
    const isNavbarExpanded = navbar.classList.contains("show");
    // Mudar o foco da página ao clickar no link do navbar
    if (!isClickInsideNavbar && isNavbarExpanded) {
        const bsCollapse = new bootstrap.Collapse(navbar, {
        toggle: true
    });
    }
});

// Adiciona um evento de clique a cada link do navbar
// para fechar o menu quando um link é clicado
const navbarLinks = document.querySelectorAll('.navbar-collapse .nav-link');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) { // Verifica se o menu está aberto
            const bsCollapse = new bootstrap.Collapse(navbar, {
                toggle: true
            });
        }
    });
});

// Inclui o botão que muda a cor
themeToggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) { // Verifica se o menu está aberto
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: true
        });
    }
});

