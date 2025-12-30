const frm = document.querySelector("form")
const atendimento = document.querySelector("span")
const out = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}° Paciente: ${pacientes[i]}\n`
    }

    out.textContent = lista
    frm.inPaciente.value = ""

})

frm.btUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()) {
        alert("Informe o Nome do Paciênte a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}° Paciente:${paciente}\n`))

    out.textContent = lista
    frm.paciente.value = ""
    frm.inPaciente.focus
})

frm.btAtender.addEventListener("click", ()=> {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()
    atendimento.textContent = atender

    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}° Paciente: ${paciente}\n`))
    out.textContent = lista
})