const frm = document.querySelector("form")
const outP1 = document.querySelector("#outP1")
const outP2 = document.querySelector("#outP2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const desconto = (preco * 0.50)
    const total = desconto + (preco * 2)

    outP1.textContent = `${produto} - Promoção: Leve 3 por ${total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`

    outP2.textContent = `O 3° produto custa apenas ${desconto.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
})