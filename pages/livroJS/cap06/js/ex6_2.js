const frm = document.querySelector("form")
const respErros = document.getElementById("outErros")
const respChances = document.getElementById("outChances")
const respDica = document.getElementById("outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit", (e)=> {
    e.preventDefault()

    const num = Number(frm.inNum.value)

    if (sorteado == num) {
        respDica.textContent = `Parabéns!! Número sorteado ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = 'exibe'
    } else {
        if (erros.includes(num)) {
            alert(`Você já apostou o número ${num}`)
        } else {
            erros.push(num)
            const numErros = erros.length
            const numChances = CHANCES - numErros

            respErros.textContent = `${numErros} (${erros.join(", ")})`
            respChances.textContent = numChances
            if (numChances == 0) {
                alert("Suas Chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = 'exibe'
                respDica.textContent = `Game Over!! Número sorteado: ${sorteado}`
            } else {
                const dica = num < sorteado ? "maior" : "menor"
                respDica.textContent = `Dica: Tente um número ${dica} que ${num}`
            }
        }
    }
    frm.inNum.value = ""
    frm.inNum.focus()
})

frm.btNovo.addEventListener("click", () => {
    location.reload()
})