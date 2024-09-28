const prompt = require("prompt-sync")()
const bairro = prompt("Bairro da Entrega: ")
let taxaEntrega

switch (bairro) {
    case "Centro":
        taxaEntrega = 5.00
        break
    case "Fragata":
    case "Três Vendas":
        taxaEntrega = 7.00
        break
    case "Laranjal":
        taxaEntrega = 10.00
        break
    default:
        taxaEntrega = 8.00
}
console.log(`Valor da Entrega em ${bairro} ${taxaEntrega.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`)