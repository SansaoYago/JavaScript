function enviar() {
    let idade = window.document.getElementById('idade')
    let IDADE = Number(idade.value)
    let resp = window.document.getElementById('res')
    if (IDADE >= 16){
        resp.innerHTML = `Com ${IDADE} anos de idade já pode votar!`
    } else {
        resp.innerHTML = `Com ${IDADE} anos de idade ainda não pode votar!`
    }
}