const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor R$: "))
const parcela = Number(prompt("N° Parcelas: "))
const valorP = Math.floor(valor / parcela)
const valorFinal = (valor % parcela) + valorP

for (let i = 1; i < parcela; i++) { 
    console.log(`${i}° parcela: ${valorP.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)
}
    
console.log(`${parcela}° parcela: ${valorFinal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)