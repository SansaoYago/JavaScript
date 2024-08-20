function enviar() {
    let dias = window.document.querySelector('#dias')
    let Dias = Number(dias.value)
    let resp = window.document.querySelector('#res')
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let mes = new Date()
    let Mes = months[mes.getMonth()]
    let diaria = (8 * 25) * Dias
    resp.innerHTML = `O Funcionário(a) trabalhou ${Dias} dias em ${Mes} <br>A jornada de Trabalho por dia é de 8Hrs <br>Será pago R$25,00 por cada hora trabalhada<br> O Salário do funcionário será ${diaria.toLocaleString("pt-br", {style: 'currency', currency: "BRL"})}`
}