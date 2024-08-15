function enviar() {
    let L = window.document.querySelector('#lar')
    let A = window.document.querySelector('#alt')
    let lar = Number(L.value)
    let alt = Number(A.value)
    let area = lar * alt
    let lt = 2**2
    let gasto = area / lt
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `Para pintar uma parede com área de ${area}mt, <br>vão ser necessário ${gasto} Litros de tinta `
}