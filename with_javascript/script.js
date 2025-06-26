document.addEventListener('DOMContentLoaded', function() {
    // Mostrar seção "Sobre mim" por padrão
    mostrarSecao('sobre');
});

function mostrarSecao(id) {
    // Esconde todas as seções
    document.querySelectorAll('section').forEach(sec => {
        sec.classList.remove('ativa');
    });
    
    // Mostra a seção clicada
    const secao = document.getElementById(id);
    secao.classList.add('ativa');
    
    // Rolagem suave
    secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function alternarTema() {
    document.body.classList.toggle('modo-claro');
    const icone = document.querySelector('.toggle-theme i');
    
    if (document.body.classList.contains('modo-claro')) {
        icone.classList.replace('fa-moon', 'fa-sun');
    } else {
        icone.classList.replace('fa-sun', 'fa-moon');
    }
}