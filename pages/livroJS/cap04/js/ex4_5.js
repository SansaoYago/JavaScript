const fmr = document.querySelector("form")
const resp = document.querySelector("h3")

fmr.addEventListener("submit", (e)=> {
    e.preventDefault()

    const numero = Number(fmr.inNumero.value)

    const raizQ = Math.sqrt(numero)

    if (Number.isInteger(raizQ)) {
        resp.textContent = `Raiz: ${raizQ}`
    } else {
        resp.textContent = `Não há raiz exata para ${raizQ.toFixed(2)}`
    }
})