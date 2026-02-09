const form = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sort = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(form.inNumero.value)
    
    if (numero == sort) {
        dica.innerHTML = `Parabéns número sorteado ${sort}`
        form.btSubmit.disabled = true
        form.btNovo.classList.add = "exibe"
    } else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro...`)
        } else {
            erros.push(numero)
            const nErros = erros.length
            const nChances = CHANCES - nErros

            respErros.innerHTML = `${nErros} (${erros.join(", ")})`
            respChances.innerHTML = nChances
            if (nChances == 0) {
            alert("Suas chances acabaram...")
            form.btSubmit.disabled = true
            form.btNovo.className = "exibe"
            respDica.textContent = `Game over!! Número sorteado ${sort}`
        } else {
            const dica = numero < sort ? "maior" : "menor"
            respDica.textContent = `Dica: Tente um número ${dica} que ${numero}`
        }
        }
        
        
    }


    form.inNumero.value = ""
    form.inNumero.focus()
    
})