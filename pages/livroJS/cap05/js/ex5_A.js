const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const fruta = frm.inFruta.value
    const num = Number(frm.inNum.value)
    let resp = ""

    for (let i = 1; i < num; i++) {
        resp += `${fruta} * `
    }
    resp += fruta

    out.textContent = resp
})