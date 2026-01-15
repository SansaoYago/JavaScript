const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = [
    {
        modelo: "Pálio 1998",
        preco: 45000,
    },
    {
        modelo: "Civic 2002",
        preco: 85000
    },
    {
        modelo: "Celta 2010",
        preco: 50000
    },
    {
        modelo: "Sandero 2014",
        preco: 32900
    },
    {
        modelo: "Fusca 1994",
        preco: 12500
    },
    {
        modelo: "Fiesta 2010",
        preco: 23000
    },
    {
        modelo: "Gol 2009",
        preco: 24300
    },
    {
        modelo: "Kwid 2018",
        preco: 35700
    },
    {
        modelo: "Astra 2011",
        preco: 31500
    },
    {
        modelo: "Honda Fit 2015",
        preco: 75000
    },
    {
        modelo: "Opala 1989",
        preco: 48500
    },
    {
        modelo: "Onix 2016",
        preco: 65000
    },
    {
        modelo: "Chevet 1990",
        preco: 55000
    }
]



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)
    carros.push({ modelo, preco })
    frm.inModelo.value = ""
    frm.inPreco.value = ""
    frm.inModelo.focus()

    //Dispara um evento click no botão listar sem clicar
    frm.btnListar.dispatchEvent(new Event("click"))
})

frm.btnListar.addEventListener("click", () => {
    if (carros.length == 0) {
        alert("Não há carros na lista!")
        return
    }

    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + " - " + Number(carro.preco).toLocaleString("pt-br", { style: "currency", currency: "BRL" }) + "\n", "")

    resp.textContent = `Lista dos carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btnFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máxmo que o cliente deseja pagar?"))

    if (maximo == 0 || isNaN(maximo)) {
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)

    if (carrosFilter.length == 0) {
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }

    let lista = ""

    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - ${carro.preco.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}\n`
    }
    resp.textContent = `Carros até ${maximo.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}\n${"-".repeat(40)}\n${lista}`
})

frm.btnPromocao.addEventListener("click", ()=> {
    const desconto = Number(prompt("Qual o percentual de desconto: "))

    if (desconto == 0 || isNaN(desconto)) {
        return
    }

    const carrosDesc = carros.map(carro => ({
        modelo: carro.modelo,
        preco: carro.preco - (carro.preco * desconto / 100)
    }))

    let lista = ""

    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - ${carro.preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`
    }

    resp.textContent = `Carros com desconto\n${"-".repeat(40)}\n${lista}`
})

function renderList() {
    frm.btnListar.dispatchEvent(new Event("click"))
}

renderList()