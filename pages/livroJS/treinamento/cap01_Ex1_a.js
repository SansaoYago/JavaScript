const prompt = require("prompt-sync")()

const numero = Number(prompt("Digite um número: "))

const vizinhos = [
    numero - 1,
    numero + 1
]

console.log(`Vizinhos ${vizinhos[0]} e ${vizinhos[1]}`)