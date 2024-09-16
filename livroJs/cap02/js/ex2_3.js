const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")
const resp3 = document.querySelector("#outresp3")

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeic.value
    const preço = Number(frm.inPre.value)

    const entrada = preço * 0.5
    const parcela = (preço * 0.50) / 12

    resp1.textContent = `Promoção: ${veiculo}`
    resp2.textContent = `Entrada de ${entrada.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`
    resp3.textContent = `+12 de ${parcela.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`

    e.preventDefault()
})