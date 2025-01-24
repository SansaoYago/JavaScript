const dado = window.document.querySelector("#dados")
const resp = window.document.querySelector("#res")

dado.addEventListener("click", (e) => {
    e.preventDefault()

    //Variáveis
    let nome, div
    
    //Entrada de dados
    div = window.document.querySelector("#dados")
    nome = prompt("Digite seu nome: ")

    //Processamento de dados
    dado.style.display = 'none'

    //Saída de dados
    resp.innerHTML = `Seja bem vindo(a) ${nome}`
})