const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //Dados de Entrada
    let valor = Number(frm.inValor.value)
    let tempo
    let troco

    //Processamento
    if (valor >= 1 && valor < 1.75) {
        tempo = "30 Min"
        troco = valor -1
    } else if (valor >= 1.75 && valor < 3) {
        tempo = "60 Min"
        troco = valor - 1.75
    } else {
        tempo = "120 Min"
        troco = valor - 3
    }
   
    //Dados de Saída
    
    if (valor < 1) {
        resp.textContent = `Valor insuficiente!`
    } else if (troco > 0) {
        resp.innerText = `Tempo: ${tempo} \nTroco: ${troco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`
    } else {
        resp.textContent = `Tempo: ${tempo}`
    }

})