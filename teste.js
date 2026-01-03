const form = document.querySelector("form")
const span = document.querySelector("span")
const pre = document.querySelector("pre")

const pacientes = []


form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = form.inPaciente.value
    pacientes.push(nome)
    let lista = ""


    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}° Paceiente: ${pacientes[i]}\n`
    }

    pre.textContent = lista
    form.inPaciente.value = ""
    form.inPaciente.focus()
})

form.btnUrg.addEventListener("click", ()=> {
    if (!form.checkValidity()) {
        alert("Informe nome do paciente a ser atendido em caráter de Urgência")
        form.inPaciente.focus()
        return
    }

    const nome = form.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}° Paciente: ${paciente}\n`))
   
    pre.textContent = lista
    form.inPaciente.value = ""
    form.inPaciente.focus()
})

form.btnAtd.addEventListener("click", () => {
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera!")
        form.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()
    let lista = ""

    pacientes.forEach((paciente, i) => (lista += `${i + 1}° Paciente: ${paciente}\n`))

    span.textContent = atender
    pre.textContent = lista

    form.inPaciente.value = ""
    form.inPaciente.focus()
})