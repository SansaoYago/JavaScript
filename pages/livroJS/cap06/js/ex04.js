const form = document.querySelector("form")
const out = document.querySelector("pre")

const criancas = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const idade = Number(form.inIdade.value)
    criancas.push({ nome, idade })

    form.reset()
    form.inNome.focus()
    form.inListar.dispatchEvent(new Event("click"))
})

form.inListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }

    const lista = criancas
        .map(u => `${u.nome} - ${u.idade} anos`)
        .join("\n")

    out.textContent = lista
})

form.inResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há criancas na lista")
        return
    }

    const copia = [...criancas] //Cria cópia do vetor criança
    copia.sort((a, b) => a.idade - b.idade) //Ordena pela idade
    let resumo = ""
    let aux = copia[0].idade //Recebe a criança de menor idade
    let nomes = [] //Para inserir nomes de cada idade

    for (const crianca of copia) {
        const { nome, idade } = crianca
        if (idade == aux) { //Se é da mesma idade aux...
            nomes.push(nome)//Adiciona ao vetor nomes
        } else {            //Senão monta o resumo para cada idade
            resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += `(${nomes.join(", ")})\n\n`
            aux = idade     //Obtém a nova idade na ordem
            nomes = []      //Limpa o vetor dos nomes
            nomes.push(nome)//Adiciona o primeiro da nova idade
        }
    }
    //Adiciona a ultima criança
    resumo += `${aux} ano(s): ${nomes.length} criança(s) -`
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += `(${nomes.join(", ")})\n\n`
    out.textContent = resumo
})