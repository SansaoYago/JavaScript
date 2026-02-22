const prompt = require("prompt-sync")()

console.log("-".repeat(40))
console.log("Programa Pizzaria")
console.log("-".repeat(40)+"\n")


const preco = Number(prompt(`\nInforme o valor a ser pago R$: `))
const aVista = preco - (preco * 0.10)
const parcela = preco / 3

let resp = `Preço: ${preco.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\nÀ Vista ${aVista.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\nOu 3x de ${parcela.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}\n\n`

console.log(resp)