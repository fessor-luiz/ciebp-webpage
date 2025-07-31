const sobreContent = document.getElementById('sobre')
const inicioContent = document.getElementById('inicio')
const trilhasContent = document.getElementById('trilhas')
const equipeContent = document.getElementById('equipe')

const mainContent = document.getElementById('main')

document.addEventListener('DOMContentLoaded', () => {

    carregarPagina('equipe')
    selecaoMenuSite('equipe')
})

sobreContent.addEventListener('click', () => {
    carregarPagina('sobre')
    selecaoMenuSite('sobre')
})

inicioContent.addEventListener('click', () => {
    carregarPagina('inicio')
    selecaoMenuSite('inicio')

})

equipeContent.addEventListener('click', () => {
    carregarPagina('equipe')
    selecaoMenuSite('equipe')
})

trilhasContent.addEventListener('click', () => {
    carregarPagina('trilhas')
    selecaoMenuSite('trilhas')

})

function carregarPagina(nome) {
    fetch(`${nome}.html`)
        .then(resp => {
            if (!resp.ok) { alert('falha ao carregar arquivo') }
            return resp.text()
        })
        .then(html => {
            mainContent.innerHTML = html
        })
}

function selecaoMenuSite(selecao) {
    equipeContent.parentElement.className = (selecao === "equipe" ? "list-group-item" : "list-group-item bg-azul")
    inicioContent.parentElement.className = (selecao === "inicio" ? "list-group-item" : "list-group-item bg-azul")
    sobreContent.parentElement.className = (selecao === "sobre" ? "list-group-item" : "list-group-item bg-azul")
    trilhasContent.parentElement.className = (selecao === "trilhas" ? "list-group-item" : "list-group-item bg-azul")
}