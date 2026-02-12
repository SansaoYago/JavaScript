const prompt = require("prompt-sync")()

console.log("Informe os cliêntes em ordem de chegada ou 'Fim' no nome para sair")
const clientes = []

do {
    const nome = prompt("Nome: ")
    if (nome == 'Fim') {
        break
    }
    const idade = Number(prompt("Idade: "))
    clientes.push({nome, idade})
    console.log("Ok, cliente inserido na lista.")
} while (true)

const filaPref = clientes
    .filter(u => u.idade > 59)
    .map((u, i) => `${i+1+". "} ${u.nome}`)
    .join("\n")

const filaNorm = clientes
    .filter(u => u.idade < 60)
    .map((u, i) => `${i+1+". "}${u.nome}`)
    .join("\n")

console.log(`Fila Presencial\n${"-".repeat(40)}\n${filaPref}\n\n`)
console.log(`Fila Normal\n${"-".repeat(40)}\n${filaNorm}`)