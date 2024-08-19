function enviar() {
    let S = window.document.querySelector("#sal")
    let sal = Number(S.value)
    let porc = (15/100) * sal
    let aum = sal + porc
    let resp = window.document.querySelector("#res")
    if (sal > 0){resp.innerHTML = `O Salário teve um aumento de 15%<br>Novo Salário passa a ser ${aum.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`
} else {
    window.alert('Valor inválido')
}
}