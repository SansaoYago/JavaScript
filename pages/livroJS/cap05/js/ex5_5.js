const frm = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

let resposta = ""
let numContas = 0
let valorTotal = 0

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valorTotal += valor

    resposta += `${descricao} - ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`
    resp1.textContent = `${resposta} -------------------------`
    resp1.style.fontSize = "1.1em"
    resp2.textContent = `${numContas} Contas - Total de ${valorTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
    resp2.style.fontSize = "1.5em"

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})