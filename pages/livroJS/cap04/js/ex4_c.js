const frm = document.querySelector("form")
const resp1 = document.getElementById("resp1")
const resp2 = document.getElementById("resp2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    let troco = 0
    let tempo

    if (valor < 1) {
        alert("Valor insuficiente")
        return
    }

    if (valor < 1.75) {
        tempo = 30
        troco = valor % 1
    } else if (valor >= 1.75 && valor < 3) {
        tempo = 60
        troco = valor % 1.75
    } else {
        tempo = 120
        if (valor > 3) {
            troco = valor % 3
        }
    }

    resp1.textContent = `Tempo: ${tempo}`

    if (troco > 0) {
        resp2.textContent = `Troco: ${troco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
    }
    
})