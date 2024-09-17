const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const uso = Number(frm.inVa.value)
    const tempo = Number(frm.inTem.value)

    const total = Math.ceil(tempo / 15) * uso

    resp.innerHTML = `Valor a Pagar ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`

    e.preventDefault()
})