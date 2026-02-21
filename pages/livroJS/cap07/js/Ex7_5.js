const form = document.querySelector("form")
const out = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inFuncionario.value

    //divide o nome em itens de vetor, criados a cada ocorrência de espaços
    const partes = nome.split(" ")
    let email = ""
    const tam = partes.length


    //obtém a inicial de cada nome antes do sobre nome
    for (let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0)
    }

    email += partes[tam - 1] + "@empresa.com.br"

    out.textContent = `E-mail: ${email.toLocaleLowerCase()}`
})