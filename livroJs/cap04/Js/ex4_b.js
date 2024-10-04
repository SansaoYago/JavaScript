const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const veloP = Number(frm.inVelP.value)
    const veloC = Number(frm.inVelC.value)
    let limite = (veloP * 0.20) + veloP

    if (veloC <= veloP) {
        resp.textContent = `Situação: Sem Multa`
    } else if (veloC > veloP && veloC <= limite) {
        resp.innerHTML = `Situação: <span style="color: Orange; font-weight: bolder;">Multa Leve</span>`
    } else (
        resp.innerHTML = `Situação: <span style="color: red; font-weight: bolder;">Multa Grave</span>`
    )
})