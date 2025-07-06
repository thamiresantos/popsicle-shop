const sabores = document.querySelectorAll('.sabor');
const sorvetePrinciapl = document.querySelector('.sorvete-principal');
const heroSection = document.querySelector('body');
const titulo = document.querySelector('h1');
const subtitulo = document.querySelector('.subtitulo');
const circulos = document.querySelector('.circulo');
const circuloSorvete = document.querySelector ('.container-sorvete');

sabores.forEach((sabor) => {
    sabor.addEventListener('click',() => {
        const novaImagem = sabor.getAttribute('data-imagem');
        sorvetePrinciapl.src = novaImagem;

        const novaCorFundo = sabor.getAttribute('data-cor-fundo');
        const novaCorTitulo = sabor.getAttribute('data-cor-titulo');
        const novaCorSubtitulo = sabor.getAttribute('data-cor-subtitulo');
        const novaCorCirculo = sabor.getAttribute('data-circulos');
        const novaCorSvt =sabor.getAttribute('data-circulos')

        heroSection.style.backgroundColor = novaCorFundo;
        titulo.style.color = novaCorTitulo;
        subtitulo.style.color = novaCorSubtitulo;
        circulos.style.backgroundColor = novaCorCirculo;
        circuloSorvete.style.backgroundColor = novaCorSvt;

        sorvetePrinciapl.classList.add('rodando');
        setTimeout(() => {
            sorvetePrinciapl.classList.remove('rodando');
        }, 300);
    });
});