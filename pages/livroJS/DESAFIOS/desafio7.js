const prompt = require("prompt-sync")()

const num = [20, 55, 12, 3, 10]

let soma = 0

for (let i = 0; i < num.length; i++) {
    soma += num[i]
}

console.log(soma)