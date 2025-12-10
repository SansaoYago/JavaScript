const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const VeloP = Number(frm.inVlP.value)
    const VeloC = Number(frm.inVlC.value)

    const multa =  VeloC > VeloP && VeloC <= (VeloP * 1.20) ? "Multa Leve" : VeloC > (VeloP * 1.20) ? "Multa Grave" : "Sem Multa"

    resp.textContent = `Situação: ${multa}`
})