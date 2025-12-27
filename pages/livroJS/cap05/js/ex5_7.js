const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const quant = Number(frm.inQuantidade.value)
    let estrelas = ""

    for (let i = 1; i <= quant; i++) {
        if (i % 2 == 1) {
            estrelas += "*"
        } else {
            estrelas += "-"
        }
    }

    resp.textContent = estrelas
})