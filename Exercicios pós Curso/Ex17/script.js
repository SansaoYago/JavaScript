function enviar() {
   let nome = window.document.getElementById('nome')
   let aluno = (nome.value)
   let n1 = window.document.getElementById('n1')
   let n2 = window.document.getElementById('n2')
   let N1 = Number(n1.value)
   let N2 = Number(n2.value)
   let media =( N1 + N2) / 2
   let resp = window.document.getElementById('res')
   if (media >= 7){resp.innerHTML = `Aluno(a) ${aluno} teve um melhor aproveitamento com a média ${media}`} else {
    resp.innerHTML = `Aluno(a) ${aluno} não teve um bom aproveitamento com a média de ${media}`
   }
}