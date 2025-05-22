document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de interatividade: Botão "Saiba Mais" que rola para a próxima seção
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', function() {
            const proximaSecao = document.getElementById('campo');
            if (proximaSecao) {
                proximaSecao.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Exemplo de efeito visual: Mudar o background do header ao rolar a página
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#1e7e34'; // Um verde mais escuro
                header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
            } else {
                header.style.backgroundColor = '#28a745'; // Volta ao verde original
                header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
            }
        });
    }

    // Exemplo de galeria de imagens interativa (poderia ser um modal, um carrossel, etc.)
    // Por simplicidade, faremos um alerta ao clicar na imagem
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Você pode implementar um modal para ver a imagem em tamanho maior aqui
            alert('Você clicou na imagem: ' + this.alt);
        });
    });

    // Animação simples para as seções ao entrar na viewport
    const sections = document.querySelectorAll('.content-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0'; // Começa invisível
        section.style.transform = 'translateY(20px)'; // Começa um pouco abaixo
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

});
