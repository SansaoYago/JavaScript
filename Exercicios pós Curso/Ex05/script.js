function enviar() {
    let n = window.document.querySelector('#num')
    let numero = Number(n.value)
    let dobro = numero * 2
    let terça = numero / 3
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `O Dobro de ${numero} é ${dobro}<br> A Terça parte de ${numero} é ${terça.toFixed(2)}`
}