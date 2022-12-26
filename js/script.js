/** menu de navegação ativo */
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);
/**************************** */

/** Ativar itens do Orçamento */
const parametros = new URLSearchParams(location.search);
parametros.forEach(ativarProduto);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);

    if (elemento) {
        elemento.checked = true;
    }
}

/*************************** */

/** perguntas frequentes */
const perguntas = document.querySelectorAll(".perguntas .btn-perguntas");

function abrirPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);
    resposta.classList.toggle("ativa");

    if (resposta.classList.contains("ativa")) {
        pergunta.setAttribute("aria-expanded", "true");
    } else {
        pergunta.setAttribute("aria-expanded", "false");
    }
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', abrirPergunta);
}

perguntas.forEach(eventosPerguntas);

/*************************** */

/** galeria de imagens */
const galeriaContainer = document.querySelector(".bicicleta-imagens");
const galeria = document.querySelectorAll(".bicicleta-imagens img");

function trocarImagem(event) {
    if (window.matchMedia("(min-width: 1000px)").matches) {
        const img = event.currentTarget;
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(imagem) {
    imagem.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

/**************************** */