const frm = document.querySelector("form")
const out = document.querySelector("pre")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    const anos = Number(frm.inAnos.value)
    let resp = ""
    let qtd = num

    for (let i = 1; i < anos; i++) {
        if (i == 1) {
            resp += `${i}° Ano: ${num} Chinchilas\n`
        } else {
            qtd = qtd * 3
            resp += `${i}° Ano: ${qtd} Chinchilas\n`
        }
    }
    qtd = qtd * 3
    resp += `${anos}° Ano: ${qtd} Chinchilas`

    out.textContent = resp
})