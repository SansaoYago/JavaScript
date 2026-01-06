const prompt = require("prompt-sync")()

const num = [1, 5, 9, 15, 78, 100]
let imprimir = ""

for (let i = 0; i < num.length; i++) {
    if (i === 0) {
        imprimir += num[i]
    } else {
        imprimir += `, ${num[i]}`
    }
}

console.log(imprimir)