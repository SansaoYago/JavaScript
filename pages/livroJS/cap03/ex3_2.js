const prompt = require("prompt-sync")()
const veiculo = prompt("Veículo: ")
const preco = Number(prompt("Preço R$: "))
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de ${entrada.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)
console.log(`+12x de ${parcela.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)