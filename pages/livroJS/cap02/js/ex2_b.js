const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const valorPagar = Math.ceil(tempo / 15) * valor

    out.textContent = `Valor a Pagar ${valorPagar.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
})