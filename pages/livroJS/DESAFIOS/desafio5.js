const prompt = require("prompt-sync")()

const compras = ['Leite', 'Pão', 'Ovos', 'Manteiga']

const indice = compras.indexOf('Ovos')

compras.push('Chocolate')

console.log(indice)

console.log(compras[compras.length -1])

console.log(compras[Math.ceil(compras.length / indice)+ 1])

console.log(compras[indice * 2])