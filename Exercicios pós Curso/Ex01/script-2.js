let dado = window.document.querySelector("#dados")
const resp = window.document.querySelector("res")

dado.addEventListener("click", (e) => {
    e.preventDefault()

    let nome = prompt("Digite seu nome: ")
    

    resp.textContent = `Seja bem vindo(a) ${nome}`
})