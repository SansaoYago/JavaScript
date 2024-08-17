function enviar() {
    let Va = window.document.getElementById('a')
    let Vb = window.document.getElementById('b')
    let Vc = window.document.getElementById('c')
    let A = Number(Va.value)
    let B = Number(Vb.value)
    let C = Number(Vc.value)
    let delta = (B**2) -4 * A * C
    let x1 = (-B + Math.sqrt(delta)) / (2 * A)
    let x2 = (-B - Math.sqrt(delta)) / (2 * A)
    let resp = window.document.getElementById('res')
    if (delta > 0){resp.innerHTML = `As raízes da equação ${A}x² + x ${C} = 0 <br> Valor de Delta: ${delta} <br>Resultado da equação: {${x1.toFixed(1)}; ${x2.toFixed(1)}}`} else {
        resp.innerHTML = `Não existe Resultados para RaizQ para Delta negativo`
    }
}