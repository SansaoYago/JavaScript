const prompt = require("prompt-sync")()

const nota = []

for (let i = 0; i < 2; i++) {
    const num = Number(prompt(`${i+1}° Nota: `))
    nota.push(num)
}

const media = nota.reduce((acc, nota) => acc + nota, 0) / nota.length


console.log(`Média: ${media}`)