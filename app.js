const isMobile = window.matchMedia("(max-width: 768px)").matches
let espacoSelecionado = ''
if (!isMobile) {
    window.location.href = "notMobile.html"
}

function modalInformacoes(elemento) {
    const imgModal = document.getElementById('img-modal')
    const nomeModal = document.getElementById('nome-modal')
    const espacoModal = document.getElementById('espaco-modal')
    const fraseEfeitoModal = document.getElementById('frase-efeito')
    const emojiModal = document.getElementById('emoji-modal')

    const elementoNomePessoa = elemento.nextElementSibling
    const elementoEspacoPessoa = elementoNomePessoa.nextElementSibling

    imgModal.src = elemento.src
    nomeModal.innerHTML = elementoNomePessoa.innerHTML
    espacoModal.innerHTML = elementoEspacoPessoa.innerHTML
    nome = elementoNomePessoa.innerHTML

    if (informacoesPessoais[nome] != undefined) {
        fraseEfeitoModal.innerHTML = `"${informacoesPessoais[nome].fraseEfeito}"`
        emojiModal.innerHTML = `${informacoesPessoais[nome].emojiFavorito}`
    } else {
        fraseEfeitoModal.innerHTML = ""
    }

}
function navEspacoSelecao(elemento) {
    const classePadrao = 'nav-link link-light text-center border border-white rounded-3 mt-2'
    const descricao_espaco = document.getElementById('descricao-espacos')
    const descricao = informacoesEspacos[`${elemento.innerHTML}`].descricao
    selecionarEspaco(classePadrao)

    if (elemento.innerHTML === espacoSelecionado) {
        descricao_espaco.innerHTML = ''
        return
    }

    elemento.className = 'nav-link text-center border border-white rounded-3 texto-azul bg-rosa mt-2'

    descricao_espaco.innerHTML = descricao
    espacoSelecionado = elemento.innerHTML

}


const informacoesEspacos = {
    "Prototipagem": {
        descricao: `Espaço para a modelagem e produção de protótipos, com o apoio de equipamentos 
        computadorizados, tais como impressora 3D e mesa de corte a laser.`
    },
    "Robótica": {
        descricao: `O Espaço tem como objetivo tornar acessível,
         a estudantes e professores, a criação de protótipos e projetos eletromecânicos utilizando
          Arduino/Micro:Bit e materiais estruturados ou não estruturados, com programação em blocos e linguagem C++.`
    }, "Cultura Digital": {
        descricao: `Espaço para o desenvolvimento de atividades alinhadas à Educomunicação,
         produções audiovisuais e pensamento computacional, por meio do uso da
          tecnologia, propiciando a todos o aprofundamento nos diversos modos de fazer,
           criar, inovar e distribuir significados típicos da cultura digital, atrelados ao uso consciente,
         ético e crítico em suas diversas aplicações no mundo digital.`
    },
    "Hub de Inovação": {
        descricao: `Espaço para EdTechs, educadores, estudantes e empreendedores desenvolverem,
         validarem e colocarem em prática ideias inovadoras e, assim,
         contribuírem para a transformação da Educação Pública de São Paulo.`
    },
    "Programação": {
        descricao: `Espaço de imaginação, criatividade e raciocínio lógico para desenvolver
         atividades plugadas e desplugadas, de maneira lúdica e criativa,
         a fim de todos compreenderem o pensamento computacional.`
    },
    "Cultura Maker": {
        descricao: `O ambiente tem como foco a Cultura Maker, que contempla
         o fazer, o construir, o experimentar e o criar, utilizando sucata e componentes eletrônicos 
        no desenvolvimento de robôs e protótipos, bem como a programação.`
    },

}

const informacoesPessoais = {
    "Luiz Henrique": {
        emojiFavorito: "🎮",
        fraseEfeito: "O inverno nunca falha em se tornar primavera ❄️🌸",
        gosta: ["Games", "Ficar em casa", "Doces"],
        naoGosta: ["Frio", "Lugares cheios de gente", "Dia de Faxina"],

    },
    "Gustavo": {
        emojiFavorito: "💻",
        fraseEfeito: "",
    },
    "Lucas": {
        emojiFavorito: "🍁😶‍🌫️",
        fraseEfeito: "Como é que é, amigo?",
    }, "Jefferson": {
        emojiFavorito: "",
        fraseEfeito: "",
    },
    "Cristina": {
        emojiFavorito: "",
        fraseEfeito: "",
    },
}

function selecionarEspaco(classePadrao) {
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
}
