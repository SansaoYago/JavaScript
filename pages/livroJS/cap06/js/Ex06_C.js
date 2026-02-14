const form = document.querySelector("form")
const resp = document.querySelector("pre")

const cadastro = [
    {
        nome: "André", acertos: 35
    },
    {
        nome: "Bianca", acertos: 29
    },
    {
        nome: "Carlos", acertos: 27
    },
    {
        nome: "Débora", acertos: 33
    },
    {
        nome: "Eduardo", acertos: 36
    },
    {
        nome: "Fernanda", acertos: 28
    },
    {
        nome: "Giovana", acertos: 31
    }
]

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const acertos = Number(form.inAcertos.value)

    cadastro.push({nome, acertos})

    form.reset()
    form.inNome.focus()
    form.inListar.dispatchEvent(new Event("click"))
})

form.inListar.addEventListener("click", () => {
    if (!cadastro.length) {
        alert("Lista Vazia")
        return
    }

    const lista = cadastro
        .reduce((lista, i) => `${lista}${i.nome} - ${i.acertos} acertos\n`, "")

    resp.textContent = lista
})

form.inAprovados.addEventListener("click", () => {
    if (!cadastro.length) {
        alert("Lista Vazia")
        return
    }
    const nAcertos = 30
    const aprovados = cadastro
        .filter(i => i.acertos >= nAcertos)
        .sort((a, b) => b.acertos - a.acertos)
        .map((i, u) => `${u+1}° ${i.nome} - ${i.acertos} acertos`)
        .join("\n")

    resp.textContent = aprovados
})