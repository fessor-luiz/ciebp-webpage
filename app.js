

const isMobile = window.matchMedia("(max-width: 768px)").matches

if (!isMobile) {
    window.location.href = "notMobile.html"
}

function modalInformacoes(elemento) {
    const imgModal = document.getElementById('img-modal')
    const nomeModal = document.getElementById('nome-modal')
    const espacoModal = document.getElementById('espaco-modal')
    const fraseEfeitoModal = document.getElementById('frase-efeito')

    const elementoNomePessoa = elemento.nextElementSibling
    const elementoEspacoPessoa = elementoNomePessoa.nextElementSibling

    imgModal.src = elemento.src
    nomeModal.innerHTML = elementoNomePessoa.innerHTML
    espacoModal.innerHTML = elementoEspacoPessoa.innerHTML
    if (informacoesPessoais[elementoNomePessoa.innerHTML] != undefined) {
        fraseEfeitoModal.innerHTML = `"${informacoesPessoais[elementoNomePessoa.innerHTML].fraseEfeito}"`
    } else {
        fraseEfeitoModal.innerHTML = ""
    }

}
function navEspacoSelecao(elemento) {
    const classePadrao = 'nav-link link-light text-center'

    const navProto = document.getElementById('nav-prototipagem')
    const navRobo = document.getElementById('nav-robotica')
    const navCulturaDigital = document.getElementById('nav-cultura-digital')
    const navHub = document.getElementById('nav-hub')
    const navProgramacao = document.getElementById('nav-programacao')
    const navCulturaMaker = document.getElementById('nav-cultura-maker')

    navProto.className = classePadrao
    navRobo.className = classePadrao
    navCulturaDigital.className = classePadrao
    navHub.className = classePadrao
    navProgramacao.className = classePadrao
    navCulturaMaker.className = classePadrao

    elemento.className = 'nav-link texto-azul bg-rosa'
}


const informacoesPessoais = {
    "Luiz Henrique": {
        emojiFavorito: "🚗",
        fraseEfeito: "C3 2006 é melhor que uma Ferrari F12",
    },
    "Gustavo": {
        emojiFavorito: "💻",
        fraseEfeito: "ARDUINOOOOO!",
    },
    "Lucas": {
        emojiFavorito: "🍁😶‍🌫️",
        fraseEfeito: "Como é que é, amigo?",
    }, "Jefferson": {
        emojiFavorito: "🍁😶‍🌫️",
        fraseEfeito: "Não😇",
    },
}