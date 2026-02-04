const form = document.querySelector("form")
const atendimento = document.querySelector("h3 .atendimento")
const out = document.querySelector("pre")

const pacientes = []

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = form.inPaciente.value
    pacientes.push(nome)
    let lista = ""

    pacientes.forEach(nome => {
        lista += `${nome}\n`
    })

    out.textContent = lista
    form.inPaciente.value = ""
    form.inPaciente.focus()
})

form.inUrgencia.addEventListener("click", ()=> {
    if (!form.checkValidity()) {
        alert("Campo de preenchimento vazio!")
        return
    }
    const nome = form.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""

    for (const paciente of pacientes) {
        lista += `${paciente}\n`
    }

    out.textContent = lista
    form.inPaciente.value = ""
    form.inPaciente.focus()
})

form.inAtender.addEventListener("click", ()=> {
    if (pacientes.length == 0) {
        alert("Não há paciêntes na lista de espera!")
        return
    }
    const atender = pacientes.shift()
    let lista = ""

    pacientes.forEach(nome => {
        lista += `${nome}\n`
    })
    
    atendimento.style.color = "Green"
    atendimento.textContent = atender
    out.textContent = lista
})