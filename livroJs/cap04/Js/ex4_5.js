const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    const RaizQ = Math.sqrt(num)

    if (Number.isInteger(RaizQ)) {
        resp.textContent = `Raiz: ${RaizQ}`
    } else {
        resp.textContent = `Não há Raiz exata para ${num}`
    }
    
})