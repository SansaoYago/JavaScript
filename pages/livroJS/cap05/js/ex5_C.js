const frm = document.querySelector("form")
const out1 = document.querySelector("#out1")
const out2 = document.querySelector("#out2")

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const num = Number(frm.inNum.value)
    let resp = `Divisores do ${num}: `
    let soma = 0

    for (let i = 1; i <= num / 2; i++) {

        if (num % i == 0) {
            if (soma === 0) {
                resp += `${i}`
            } else {
                resp += `, ${i}`
            }
            soma += i
        }
    }
    
    resp += ` (Soma ${soma})`
    out1.textContent = resp

    if (soma === num) {
        out2.textContent = `${num} É um Número Perfeito`
    } else {
        out2.textContent = `${num} Não é um Número Perfeito`
    }

    frm.inNum.value = ""
    frm.inNum.focus()
})