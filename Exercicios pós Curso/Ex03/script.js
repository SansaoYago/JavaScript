function enviar() {
    let nome = window.document.getElementById('name')
    let name = (nome.value)
    let nota1 = window.document.querySelector('#n1')
    let nota2 = window.document.querySelector('#n2')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let media = (n1 + n2) / 2
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `O Aluno(a) ${name}, teve as notas ${n1} e ${n2} <br> E a sua média foi de ${media.toFixed(2)}`
}