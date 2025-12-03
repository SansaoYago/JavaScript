const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const nome = frm.inNome.value
    const masc = frm.inMasc.checked
    const altura = Number(frm.inAlt.value)

    const peso = masc ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
    
    resp.textContent = `${nome}: Seu peso ideal é ${peso.toFixed(2)}`
})

frm.addEventListener("reset", ()=> {
    resp.textContent = ``
})