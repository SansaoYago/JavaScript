const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const HoraBr = Number(frm.inHoraBr.value)

    let HoraFr =  HoraBr + 5
    
    if (HoraFr > 24) {
        HoraFr = HoraFr - 24
    }

    resp.textContent = `Hora na França: ${HoraFr.toFixed(2)}`

})