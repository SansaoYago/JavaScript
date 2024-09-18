const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário do Funcionário: "))
const tempo = Number(prompt("Tempo (Ano) "))
const quadrienio = Math.floor(tempo / 4)
const aumento = salario * quadrienio / 100
console.log(`Quadirênios: ${quadrienio}`)
console.log(`Salário Final: ${(salario+aumento).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)