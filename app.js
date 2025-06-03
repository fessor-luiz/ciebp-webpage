const sobreContent = document.getElementById('sobre')
const inicioContent = document.getElementById('inicio')
const trilhasContent = document.getElementById('trilhas')
const equipeContent = document.getElementById('equipe')

const mainContent = document.getElementById('main')

document.addEventListener('DOMContentLoaded', () => {
    mainContent.innerHTML = ''
})

sobreContent.addEventListener('click', () => {
    carregarPagina('sobre')
})

inicioContent.addEventListener('click', () => {
    carregarPagina('inicio')
})
equipeContent.addEventListener('click', () => {
    carregarPagina('equipe')
})
trilhasContent.addEventListener('click', () => {
    carregarPagina('trilhas')
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