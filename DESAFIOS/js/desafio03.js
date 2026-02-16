const button = document.querySelector("input")
const out = document.querySelector("#out1")
const nomes = ["Ana", "Beto", "Ana", "Caio", "Beto", "Ana"]

button.addEventListener("click", () => {
    const contagem = nomes
        .reduce((cont, nomeAtual) => {
            cont[nomeAtual] = (cont[nomeAtual] || 0) + 1
            return cont
        }, {})

    out.textContent = JSON.stringify(contagem, null, 2)
})