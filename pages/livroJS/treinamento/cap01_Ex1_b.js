const prompt = require("prompt-sync")()

const valorTotal = Number(prompt("Valor Total da Conta R$: "))
const parcela = Number(prompt("Quantos Clientes vão pagar: "))

const total = valorTotal / parcela



console.log(`\n\nValor por cliente: ${total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n`)