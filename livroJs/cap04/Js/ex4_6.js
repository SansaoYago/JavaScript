const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)
    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinqueta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        resp1.textContent = `Notas de 100: ${notasCem}`
    }
    if (notasCinqueta > 0) {
        resp2.textContent = `Notas de 50: ${notasCinqueta}`
    }
    if (notasDez > 0) {
        resp3.textContent = `Notas de 10: ${notasDez}`
    }
})