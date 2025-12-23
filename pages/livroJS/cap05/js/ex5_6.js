const frm = document.querySelector("form")
const out = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let divisor = 0

    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            divisor = 1
            break
        }
    }

    let resp = num > 1 && !divisor ? `${num} É primo` : `${num} Não é primo`

    out.textContent = resp

    frm.inNum.value = ""
    frm.inNum.focus()
})