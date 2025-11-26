const frm = document.querySelector("form")
const outP1 = document.querySelector("#outP1")
const outP2 = document.querySelector("#outP2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(preco * 2)

    outP1.textContent = `Promoção de ${medicamento}`
    outP2.textContent = `Leve 2 por apenas ${promocao.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`

})