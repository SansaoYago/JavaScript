const prompt = require("prompt-sync")()

const fila = ["Ana", "Beto", "Caio"]

const adicionar = prompt("Adicionar: ")

fila.push(adicionar)

let atender = fila.shift()

console.log(`Em Atendimento: ${atender}\nFila: ${fila.join(" - ")}`)