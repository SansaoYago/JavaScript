const prompt = require("prompt-sync")()

const podio = ['Prata', 'Bronze']

if (podio.indexOf('Ouro') == -1) {
    podio.unshift('Ouro')
}

console.log(`O Primeiro lugar ganhou a medalha de ${podio[0]}`)