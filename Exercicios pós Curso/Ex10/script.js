function enviar() {
    let P = window.document.getElementById('pro')
    let produto = Number(P.value)
    let resp = window.document.querySelector('#res')
    let desc = (5 / 100) * produto
    let valorFinal = produto - desc
    resp.innerHTML = `Preço do Produto: ${produto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>Desconto do produto 5%: ${desc.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}<br>Produto com 5% de desconto custara: ${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
}