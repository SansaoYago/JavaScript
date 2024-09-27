const prompt = require("prompt-sync")()
const pessoas = Number(prompt("N° Pessoas: "))
const qtPeixes = Number(prompt("Quantidade de Peixes: "))

let total

if (qtPeixes <= pessoas) {
    total = pessoas * 20
} else {
    total = (pessoas * 20) + ((qtPeixes - pessoas) * 12)
}

console.log(`Pagar ${total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)