function enviar() {
    let QTD = window.document.getElementById('dias')
    let cigarro = Number(QTD.value)
    let TEMPO = window.document.getElementById('anos')
    let ano = Number(TEMPO.value)
    let ANO = 365
    let ANOT = ano * ANO
    let total = ANOT * cigarro
    let dia = total / 144
    let resp =  window.document.getElementById('res')
    resp.innerHTML = `Fumando ${cigarro} cigarros por dia durante ${ano} anos <br>A pessoa vai perder ${dia.toFixed(0)} dias de Vida!`
}