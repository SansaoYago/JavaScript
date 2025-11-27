const prompt = require("prompt-sync")()

//Entrada de dados
const pesoKg = Number(prompt("Peso da Ração (Kg): "))
const consumo = Number(prompt("Consumo Diário: "))

//Processamento de dados
const pesoGr = pesoKg * 1000
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo

//Saída de dados
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)

