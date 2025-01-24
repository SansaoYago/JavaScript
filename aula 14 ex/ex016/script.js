function contagem() {
    var ini = window.document.getElementById('ini')
    var res = window.document.querySelector('#res')
    var fim = window.document.querySelector('#fim')
    var passo = window.document.querySelector('#passo')
   

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] faltam dados')
    } else {
        res.innerHTML = `Contando:\n`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
        }} else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
    

}