const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    //Entrada e dados
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    //Processamento de dados
    const entrada = preco * 0.50
    const parcelas = (preco * 0.50) / 12

    //Saída de dados
    resp1.textContent = `Promoção: ${veiculo}`
    resp2.textContent = `Entrada de ${entrada.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
    resp3.textContent = `+12x de ${parcelas.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
})