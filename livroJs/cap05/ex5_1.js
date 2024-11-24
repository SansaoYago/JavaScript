const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm,addEventListener("submit", (e) => {
    e.preventDefault()

    let num = Number(frm.inNum.value)
    let resposta = ""

    for (c = 1; c <= 10; c++) {
        resposta = resposta + num + " X " + c + " = " + (num * c) + "\n"
    }

    resp.innerText = resposta
    
})