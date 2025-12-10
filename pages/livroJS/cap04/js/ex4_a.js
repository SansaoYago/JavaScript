const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm. addEventListener("submit", (e)=> {
    e.preventDefault()

    const num = Number(frm.inNum.value)

    if (num == 0 || isNaN(num)) {
        alert("Informe um Número Válido")
        return
    }
    
    const text = num % 2 == 0 ? "Par" : "Ímpar"

    resp.textContent = `${num} é ${text}`

}
    )