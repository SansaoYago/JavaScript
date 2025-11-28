const frm = document.querySelector("form")
const outp1 = document.getElementById("outp1")
const outp2 = document.getElementById("outp2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = frm.inNome.value
    const N1 = Number(frm.inN1.value)
    const N2 = Number(frm.inN2.value)

    const Media = (N1 + N2) / 2
    outp1.textContent = `Média das Notas ${Media.toFixed(2)}`

    if (Media >= 7) {
        outp2.textContent = `Parabéns ${nome}! Você foi aprovado(a)`
        outp2.style.color = "blue"
    } else {
        outp2.textContent = `Ops ${nome}... Você foi reprovado(a)`
        outp2.style.color = "red"
    }
})