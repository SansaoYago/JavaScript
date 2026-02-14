const prompt = require("prompt-sync")()

console.log("Para sair do programa informe '0' ")

const saques = []
let invalidos = 0

do {
    const valor = Number(prompt("Digite o valor do saque R$: "))
    if (valor === 0) {
        break
    }
    saques.push(valor)
    if (valor % 10 == 0) {
        console.log(`Valor do saque ${valor.toFixed(2)}`)
    } else {
        console.log("Valor inválido para saque, notas disponíveis R$:10,00")
        invalidos++
    }
} while (true)

const saquesV = saques
    .filter(saques => saques % 10 === 0)
    .map((saques, i) => `${i + 1}° Saque: ${saques.toFixed(2)}`)
    .join("\n")

const soma = saques
    .filter(saques => saques % 10 === 0)
    .reduce((soma, saque) => soma + saque, 0)

const saquesI = saques
    .filter(saques => saques % 10 != 0)
    .map((saques, i) => `${i + 1}° Saque: ${saques.toFixed(2)}`)
    .join("\n")

console.log(`Saques válidos\n${"-".repeat(40)}\n${saquesV}\nSoma dos saques válidos ${soma.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n\n`)

console.log(`${invalidos} saques inválidos\n${"-".repeat(40)}\n${saquesI}\n\n`)
