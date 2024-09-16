const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed.value
    const valor = Number(frm.inPre.value) * 2

    resp1.innerHTML = `Promoção de ${medicamento}`
    resp2.innerHTML = `Leve 2 por ${Math.floor(valor).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`

    e.preventDefault()
})