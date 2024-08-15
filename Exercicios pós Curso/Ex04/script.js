function enviar() {
    let n = window.document.querySelector('#num')
    let numero = Number(n.value)
    let ant = numero - 1
    let suc = numero + 1
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `O Antecessor de ${numero} é ${ant}<br> O Sucessor de ${numero} é ${suc}`
}