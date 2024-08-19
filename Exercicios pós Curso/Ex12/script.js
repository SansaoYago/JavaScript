function enviar() {
    let dias = window.prompt("O veículo foi alugado por quantos dias?")
    let km = window.prompt("O veiculo percorreu quantos Km? ")
    let diaria = dias * 90
    let tarifaKm = km * 0.2
    let diariaKm = diaria + tarifaKm
    let resp = window.document.getElementById("res")
    if (km <= 0 || dias <= 0) {
        window.alert("Valor inválido")
    } else {
        let dado = window.document.getElementById("dados")
        dado.style.display = 'none'
        resp.innerHTML = `Veículo alugado por ${dias} dias <br>Veículo percorreu ${km} Km<br>Valor do aluguel do veículo: ${diariaKm.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})}`
    }

    
}