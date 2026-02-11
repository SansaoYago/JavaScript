const form = document.querySelector("form")
const out = document.querySelector("pre")

const criancas = []

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({nome, idade})

    const lista = criancas
        .reduce((listar, index)=> `${listar}${index.nome} - ${index.idade}\n`, "")


    out.textContent = lista
    form.inNome.value = ""
    form.inIdade.value = ""
    form.inNome.focus()
})