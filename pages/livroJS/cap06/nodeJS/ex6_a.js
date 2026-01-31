const prompt = require("prompt-sync")()

console.log(`Digite FIM para sair\n ${"-".repeat(40)}`)

const alunos = []

do {
    const nome = prompt("Nome: ")
    if (nome.toUpperCase() == "FIM") {
        break
    }
    const nota = prompt(`Nota do(a) Aluno(a) ${nome}: `)
    alunos.push({ nome, nota })
    console.log(`Ok Aluno(a) ${nome} cadastrado(a)...`)
} while (true)
console.log("-".repeat(40))

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior nota: ${maior}`)

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior)

    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma")
}