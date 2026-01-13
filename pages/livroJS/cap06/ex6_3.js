const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()

    //Dispara um evento click no botão listar sem clicar
    frm.btnListar.dispatchEvent(new Event("click"))
})

frm.btnListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não há carros na lista!")
        return
    }

    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " -  R$:" + carro.preco.toFixed(2) + "\n", "" )

    resp.textContent = `Lista dos carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})