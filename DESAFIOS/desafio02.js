const button = document.querySelector("input")

const produtos = [
  { nome: "Teclado", preco: 120, qtd: 2 },
  { nome: "Mouse", preco: 80, qtd: 1 },
  { nome: "Monitor", preco: 900, qtd: 1 },
  { nome: "Cabo HDMI", preco: 40, qtd: 3 }
];
/*
    4. Criar um array contendo o valor total de cada produto (preco * qtd).
    5. Calcular o valor total da compra.
    6. Criar um array apenas com produtos cujo valor total seja acima de R$100.
*/

button.addEventListener("click", () => {
    const out1 = document.getElementById("out1")
    const out2 = document.getElementById("out2")
    const out3 = document.getElementById("out3")

    const totalProduto = produtos.map(i => i.preco * i.qtd)

    const novaLista = produtos
        .map(index => `Produto: ${index.nome} - Preço: ${(index.preco * index.qtd).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)
        .join("\n")

    const valorTotal = totalProduto.reduce((total, u) => total + u, 0)

    const filtro = produtos
        .filter(u => (u.preco * u.qtd) >= 100)
        .map(u => u.nome+ " - " +(u.preco * u.qtd).toLocaleString("pt-br", {style: "currency", currency: "BRL"}))
        .join("\n")

    out1.textContent = novaLista
    out2.textContent = `${"-".repeat(35)}\nValor total: ${valorTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`
    out3.textContent = `${"-".repeat(35)}\nProdutos com valor acima de R$: 100,00\n${filtro}`
})