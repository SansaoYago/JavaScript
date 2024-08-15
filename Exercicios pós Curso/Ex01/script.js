function enviar() {
    let nome = window.prompt('Digite seu nome')
    let inicio = window.document.getElementById('dados')
    let resp = window.document.getElementById('res')
    inicio.style.display = 'none'
    resp.innerHTML = `Seja bem vindo(a) ${nome}`
}