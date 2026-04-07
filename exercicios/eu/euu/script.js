// Função para rolagem suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adiciona funcionalidade aos links de navegação para rolagem suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Animação simples ao carregar a página
window.addEventListener('load', function() {
    const hero = document.getElementById('hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 1s, transform 1s';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});