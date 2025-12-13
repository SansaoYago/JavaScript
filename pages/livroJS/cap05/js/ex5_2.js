const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const numero = Number(frm.inNum.value)
    let resposta = ""

    for (let i = numero; i > 0; i--) {
        if (i == 1) {
            resposta += `${i}.`
        } else {
            resposta += `${i}, `
        }
    }

    resp.textContent = resposta
})