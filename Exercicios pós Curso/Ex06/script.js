function enviar() {
    let mt = window.document.querySelector('#met')
    let metro = Number(mt.value)
    let km = metro / 1000
    let Hm = metro / 100
    let Dam = metro / 10
    let dm = metro * 10
    let cm = metro * 100
    let mm = metro * 1000
    let resp = window.document.querySelector('#res')
    resp.innerHTML = `A distância de ${metro}m corresponde a:<br> ${km}km <br> ${Hm}Hm <br> ${Dam}Dam <br> ${dm}dm <br> ${cm}cm <br> ${mm}mm`
}