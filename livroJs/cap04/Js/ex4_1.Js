const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const aluno = frm.inAluno.value
    const nota1 = Number(frm.pNota.value)
    const nota2 = Number(frm.sNota.value)

    const media = (nota1 + nota2) / 2
    if (media >= 7) {
        resp.innerHTML = `<p>Média das Notas ${media}</p>\n
        <p style="font-size: 0.8em; color: blue;">Parabéns ${aluno}! Você foi aprovado(a)</p>`
        
    } else if (media>= 4) {
        resp.innerHTML = `<p>Média das Notas ${media}</p>\n
        <p style="font-size: 0.8em; color: orange;">Ops ${aluno}! Você festá em exame(a)</p>`
    } else {
        resp.innerHTML = `<p>Média das Notas ${media}</p>\n
        <p style="font-size: 0.8em; color: red;">Ops ${aluno}! Você foi reprovado(a)</p>`
        
    }

    e.preventDefault()
})