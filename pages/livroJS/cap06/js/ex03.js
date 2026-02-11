const form = document.querySelector("form")
const out = document.querySelector("pre")
const carros = []

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const modelo = form.inModelo.value
    const preco = Number(form.inPreco.value)

    carros.push({modelo, preco})
    form.inModelo.value = ""
    form.inPreco.value = ""
    form.inModelo.focus()

    form.btListar.dispatchEvent(new Event("click"))
})

form.btListar.addEventListener("click", ()=> {
    if (carros.length == 0) {
        alert("Não há carros na lista")
        return
    }

    const lista = carros
        .reduce((listar, index) => `${listar}Veículo: ${index.modelo} - Preço: ${(index.preco).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`, "")

    out.textContent = `Lista dos carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

form.btFiltrar.addEventListener("click", ()=> {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

    if (maximo == 0 || isNaN(maximo)) {
        return
    }

    const lista = carros
        .filter(index => index.preco <= maximo)
        .reduce((listar, index )=> `${listar}${index.modelo} - ${(index.preco).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`, "")

    if (lista.length == 0) {
        alert("Não há veículo com preço inferior ou igual ao solicitado")
        return
    }

    out.textContent = `Lista dos carros Cadastrados até ${maximo.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n${"-".repeat(40)}\n${lista}`
})

form.btSimular.addEventListener("click", ()=> {
    const desconto = Number(prompt("Qual o percentual de desconto?"))

    if (desconto == 0 || isNaN(desconto)) {
        return
    }

    /*const novoPreco = carros.map(index => ({
        modelo: index.modelo,
        preco: index.preco - (index.preco * desconto / 100)
    }))
    let lista = ""

    for (const listar of novoPreco) {
        lista += `Veículo: ${listar.modelo} - Preço: ${listar.preco}\n`
    }*/

    const novoPreco = carros
        .map(index => ({
            modelo: index.modelo,
            preco: index.preco - (index.preco * desconto / 100)})
        )
        
    const lista = novoPreco
        .reduce((listar, index) => `${listar}Veículo: ${index.modelo} - Preço: ${(index.preco).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`, "")

    out.textContent = `Carros com desconto de ${desconto}%\n${"-".repeat(40)}\n${lista}`
})