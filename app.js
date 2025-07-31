

const isMobile = window.matchMedia("(max-width: 768px)").matches

if (!isMobile) {
    window.location.href = "notMobile.html"
}

function modalInformacoes(elemento) {
    const imgModal = document.getElementById('img-modal')
    const nomeModal = document.getElementById('nome-modal')
    const espacoModal = document.getElementById('espaco-modal')
    imgModal.src = elemento.src

    // nomeModal.innerHTML = elemento.innerHTML
    // espacoModal.innerHTML = elemento.innerHTML

}
function navEspacoSelecao(element) {
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

    element.className = 'nav-link texto-azul bg-rosa'
}