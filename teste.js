const form = document.querySelector("form")
const elegido = document.getElementById("Elegido")
const lista = document.querySelector("pre")

const item = []

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const desc = form.inDescricao.value
    item.push(desc)
    let Lista = `Esperando\n---------------\n`

    for (let i = 0; i < item.length; i++) {
        Lista += `${i + 1}° Item: ${item[i]}\n`
    }

    lista.textContent = Lista
    form.inDescricao.value = ""
    form.inDescricao.focus()
})

form.btPr.addEventListener("click", ()=> {
    if (!form.inDescricao.value) {
        alert("Informe um item para Prioridade")
        form.inDescricao.focus()
        return
    }

    const desc = form.inDescricao.value
    item.unshift(desc)
    let Lista = `Esperando\n---------------\n`

    item.forEach((descricao, i) => (Lista += `${i + 1}° Item: ${descricao}\n`))

    lista.textContent = Lista
    form.inDescricao.value = ""
    form.inDescricao.focus()
})

form.btEleger.addEventListener("click", () => {
    if (item.length == 0) {
        alert("Não há Item para eleger!")
        form.inDescricao.focus()
        return
    }

    const eleger = item.shift()
    elegido.textContent = eleger
    
    let Lista = `Esperando\n---------------\n`
    item.forEach((descricao, i) => (Lista += `${i + 1}° Item: ${descricao}\n`))

    lista.textContent = Lista
    if (item.length == 0) {
        lista.textContent = ""
    }

})