const form = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

const conta = []
let numContas = 0
let valorTotal = 0

form.addEventListener("submit", (e) => {
    e.preventDefault()
    numContas ++
    const descricao = form.inDescricao.value
    const valor = Number(form.inValor.value)

    conta.push({descricao, valor})
    
    let lista = ""
    

    const total = conta.reduce((acumulador, item) => acumulador + item.valor, 0)

    conta.forEach((item, index) => (lista += `${index + 1}° Item: ${item.descricao} - ${item.valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`))

    
   
    resp1.textContent = lista
    resp2.textContent = `${numContas} Contas - Total de:${total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
    form.inDescricao.value = ""
    form.inDescricao.focus()
    form.inValor.value = ""
})