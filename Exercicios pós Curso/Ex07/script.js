function enviar() {
    let rs = window.document.querySelector('#real')
    let real = Number(rs.value)  
    let dollar = 3.45
    let conversão = real / dollar
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `Com ${real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} vai poder comprar ${conversão.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}`
}