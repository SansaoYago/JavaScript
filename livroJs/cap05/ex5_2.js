const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let num = Number(frm.Num.value)
    let resposta = `Entre ${num} e 1: `

    for (let i = num; i > 0; i = i - 1) {
       if (i == 1) {
        resposta = `${resposta}${i}.`
        } else {
            resposta = `${resposta}${i} - `
        }
    }
    resp.innerText = resposta
})