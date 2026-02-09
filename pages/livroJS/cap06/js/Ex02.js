const form = document.querySelector("form")
const respErros = document.querySelector("#erros")
const chances = document.querySelector("#chances")
const dica = document.querySelector(".dica")

const erros = []
const sort = Math.floor(Math.random() * 100) + 1
const nChances = 6

form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert(sort)
    const numero = Number(form.inNumero.value)
    
    if (numero == sort) {
        dica.innerHTML = `Parabéns número sorteado ${sort}`
        form.btSubmit.disabled = true
        form.btNovo.classList.add = "exibe"
    }



    respErros.innerHTML = erros
    chances.innerHTML = nChances
    form.inNumero.value = ""
    form.inNumero.focus()
    
})