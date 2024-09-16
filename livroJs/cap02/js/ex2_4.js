const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const Consumo = Number(frm.inConsumo.value)

    const total = (quilo / 1000) * Consumo
    resp.textContent = `Valor a pagar ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`

    e.preventDefault()
})