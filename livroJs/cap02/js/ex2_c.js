const frm = document.querySelector("form")
const resp1 = document.querySelector("#outresp1")
const resp2 = document.querySelector("#outresp2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inPro.value    
    const preço = Number(frm.inPre.value)

    const promoção = preço * 0.50
    const preFinal = (preço * 2) + promoção

    resp1.innerHTML = `${produto} - Promoção: Leve 3 por ${preFinal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`
    resp2.innerHTML = `O 3° produto custa apenas ${promoção.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`

    e.preventDefault()
})