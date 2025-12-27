const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const nEtiquetas = Number(prompt("N° de Etiquetas: "))

for (let i = 1; i <= nEtiquetas / 2; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (nEtiquetas % 2 == 1) {
    console.log(produto)
}