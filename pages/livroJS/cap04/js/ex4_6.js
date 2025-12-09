const frm = document.querySelector("form")
const outp1 = document.getElementById("outp1")
const outp2 = document.getElementById("outp2")
const outp3 = document.getElementById("outp3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const saque = Number(frm.inSaque.value)

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100")

        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)

    if (notasCem > 0) {
        outp1.textContent = `Notas de R$ 100: ${notasCem}`
    }
    if (notasCinquenta > 0) {
        outp2.textContent = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        outp3.textContent = `Notas de R$ 10: ${notasDez}`
    }
})

