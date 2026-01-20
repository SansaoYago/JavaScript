const form = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [
    {
        nome: "Lucas", idade: 4
    },
    {
        nome: "Ana", idade: 3
    },
    {
        nome: "Bianca", idade: 6
    },
    {
        nome: "Pedro", idade: 6
    },
    {
        nome: "João", idade: 4
    }
]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({ nome, idade })
    form.reset()
    form.inNome.focus()
    form.btListar.dispatchEvent(new Event("click"))
})

form.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Nã há crianças na lista!")
        return
    }
    let lista = ""

    for (const crianca of criancas) {
        const { nome, idade } = crianca
        lista += nome + " - " + idade + " anos\n"
    }

    resp.textContent = lista
})

form.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Nã há crianças na lista!")
        return
    }

    const copia = [...criancas]

    copia.sort((a, b) => a.idade - b.idade)
    let resumo = ""
    let aux = copia[0].idade
    let nomes = []
    for (const crianca of copia) {
        const { nome, idade } = crianca
        if (idade == aux) {
            nomes.push(nome)
        } else {
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade
            nomes = []
            nomes.push(nome)
        }
    }
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"

    resp.textContent = resumo
})