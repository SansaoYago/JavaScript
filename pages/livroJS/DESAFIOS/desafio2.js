const prompt = require("prompt-sync")()

const frutas = ['Maçã', 'Banana', 'Pera']

console.log(frutas)

let retirar = prompt("Qual fruta acabou? ")


let acabou = Number(frutas.indexOf(retirar))

frutas.splice(acabou, 1)

frutas.push('Uva', 'Laranja')

console.log(frutas)

