const listaFrases = [
    "formatura da mamãe",
    "viagem com a familia",
    "natal com a familia!",
    "almoço de domingo",
    "festa junina!"

]

const listaImagens = [
    "fotos/foto-1.jpg",
    "fotos/fotos-2.jpg",
    "fotos/foto-3.jpg",
    "fotos/foto-4.jpg",
    "fotos/foto-5.jpg"
]

const frase = document.getElementById('frase')
const imagem = document.getElementById('imagem')
let indiceAtual = 0
let ultimoIndice = listaFrases.length - 1

frase.textContent = listaFrases[0]
imagem.src = listaImagens[0]

function proximaFoto() {

    if(indiceAtual < ultimoIndice){
        //pode ir para proximo
        indiceAtual ++
    } else if (indiceAtual == ultimoIndice) {
        indiceAtual = 0
    }



    frase.textContent = listaFrases[indiceAtual]
    imagem.src = listaImagens[indiceAtual]
}

function mudarPagina(){
    window.open('pagina2.html', '_blank')
}
