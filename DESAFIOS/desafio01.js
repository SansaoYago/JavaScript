const button = document.querySelector("input")
/*
    NÍVEL 1 — Aquecimento (map + filter)
    1. Criar um array somente com os nomes.
    2. Criar um array apenas com usuários maiores de idade.
    3. Criar um array apenas com os nomes dos usuários maiores de idade.
 */
const users = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carlos", idade: 16 },
    { nome: "Diana", idade: 28 },
    { nome: "Eduardo", idade: 19 }
]

button.addEventListener("click", ()=> {
    const out1 = document.getElementById("nome")
    const out2 = document.getElementById("mIdade")
    const out3 = document.getElementById("nMidade")

    const listaNomes = users
        .map(name => name.nome)
        .join(" - ")

     const listaMaiores = users
        .filter(index => index.idade >= 18)

    let listaM =""
    listaMaiores.forEach(u => {
        listaM += `Nome: ${u.nome} - Idade: ${u.idade}\n`
    })
   
    const nomeM = users
        .filter(index => index.idade >= 18)
        .map(index => index.nome)
        .join("\n")

    out1.textContent = `Lista de nomes\n${listaNomes}` 
    out2.textContent = `${"-".repeat(40)}\nLista maiores de idade\n${listaM}`
    out3.textContent = `${"-".repeat(40)}\nNome dos maiores de idade\n${nomeM}`
})
