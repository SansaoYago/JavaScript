const form = document.querySelector("form")
const out = document.querySelector("span")
const resp = document.querySelector("h4")

const numeros = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(form.inNumero.value)
    numeros.push(num)

    out.innerHTML = numeros
    form.reset()
})

form.inVerificar.addEventListener("click", () => {
    if (!numeros.length) {
        alert("Não há numeros na lista")
        return
    }
    let info = ""
    const copia = [...numeros]
    copia.sort((a, b) => a - b)

    if (copia.join("-") == numeros.join("-")) {
        info = "Números estão em ordem crescente!"
    } else {
        info = "Atenção... Números não estão em ordem crescentes!"
    }

    resp.textContent = info
})