function enviar() {
    let km = window.document.getElementById('km')
    let KM = Number(km.value)
    let resp = window.document.getElementById('res')
    if (KM > 80) {
        let multa = 5
        let MULTA = (KM - 80) * multa
        resp.innerHTML = `Velocidade acima do permitido 80Km/h<br>Será cobrado R$5,00 por cada Km/h acima do limite permitido<br>O valor da multa será de ${MULTA.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}`
    } else {
        resp.innerHTML = `Velocidade dentro do limite`
    }
}