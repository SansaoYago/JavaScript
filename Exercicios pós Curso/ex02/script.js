function enviar() {
    let nome = window.document.getElementById('name')
    let nam = (nome.value)
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let agora = new Date()
    let mes = months[agora.getMonth()]
    let s = window.document.getElementById('sal')
    let salario = Number(s.value)
    let resp = window.document.getElementById('res')
    resp.innerHTML = `Funcionário: ${nam} \n Salário: ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} \n Funcionário(a) ${nam} tem um salário de ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em ${mes}`
}