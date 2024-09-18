const prompt = require("prompt-sync")()

const peso = Number(prompt("Peso da Ração em (Kg): "))
const consumo = Number(prompt("Consumo do Animal em (gm) por dia: "))

const pesoGr = peso * 1000
const duração = Math.floor(pesoGr / consumo) 
const resto = pesoGr % consumo

console.log(`Duração ${duração} dias \nSobra: ${resto}gr`)