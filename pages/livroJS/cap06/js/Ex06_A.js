const form = document.querySelector("form")
const out = document.querySelector("pre")

const clubes = ["Grêmio", "Pelotas", "Juventude", "Internacional", "Brasil", "Ypiranga", "Caxias", "Guarany"]

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const clube = form.inClube.value

    if (clube == clubes.includes(clube)) {
        alert("Clube já foi inscrito")
        return
    }
    clubes.push(clube)
    //alert(`Clube ${clube} inserido na lista!`)

    form.reset()
    form.inClube.value = ""
    form.inListar.dispatchEvent(new Event("click"))
})

form.inListar.addEventListener("click", () => {
    if (!clubes.length) {
        alert("Não há clubes na lista")
        return
    } else if (clubes.length % 2 != 0) {
        alert("Insira mais um clube na lista para gerar uma tabela de jogos")
        return
    }

    let lista = ""

    clubes.forEach((clube, i) => {
        lista += `${i + 1}° Clube: ${clube}\n`
    })

    out.textContent = lista
})

form.inTabela.addEventListener("click", () => {
    if (!clubes.length) {
        alert("Não há clubes na lista")
        return
    }

    let lista = ""

    while (clubes.length > 0) {
        let p = clubes.shift()
        let u = clubes.pop()
        lista += `${p} X ${u}\n`
    }

    out.textContent = lista
})