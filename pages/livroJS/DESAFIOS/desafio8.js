const prompt = require("prompt-sync")()

const nomes = ["Ana", "Carlos", "Mariana", "José", "Vitória"]
const procurar = prompt("Verificar Nome: ")

let encontrado = false

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === procurar) {
        encontrado = true
        break // Para o loop pois já achou
    } else {
        console.log(`Procurando... (passando por ${nomes[i]})`)
    }
}

if (encontrado) {
    console.log("Nome encontrado!")
} else {
    console.log("Nome não está na lista.")
}