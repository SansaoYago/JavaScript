const prompt = require("prompt-sync")()
const num = Number(prompt("Digite um Número (centena): "))

if (num < 100 || num >= 1000) {
    console.log("[ERRO] O número deve ser uma centena!")
    return
}

const num1 = Math.floor(num / 100)
const sobra = num % 100
const num2 = Math.floor(sobra / 10)
const num3 = sobra % 10
console.log(`Ivertido ${num3}${num2}${num1}`)