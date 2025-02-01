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
    if (nome == "" || nome.length == 0) {
        alert("Informe um Nome válido!!")
        dado.style.display = 'block'
        resp.style.display = 'none'
    } else {
        resp.innerHTML = `Seja bem vindo(a) ${nome}`
        dado.style.display = 'none'
        resp.style.display = 'block'
    }

    //Saída de dados
        
    


    
})